const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(col, cb) {
      for (const key in col) {
        cb(col[key])
      }
      return col
    },

    map: function(col, cb) {
      let response = []
      for (const key in col) {
         response.push( cb(col[key]) )
      }
      return response
    },

    reduce: function(col, cb, start) {
      let response = start || col[0]
      for (let i=0; i<col.length; i++) {
         response = cb( response, col[i] )
      }
      return response
    },

    find: function(col, cb) {
      let response = []
      for (let i=0; i<col.length; i++) {
        if ( cb(col[i]) ) {
          return col[i]
        }
      }
      return undefined
    },

    filter: function(col, cb) {
      let response = []
      for (let i=0; i<col.length; i++) {
        if ( cb(col[i]) ) {
          // console.log(col[i])
          response.push(col[i])
        }
      }
      return response
    },

    size: function(col) {
      let counter = 0
      for (let item in col) {
        counter++
      }
      return counter
    },

    first: function(col, num=1) {
      let response = []
      for (let i=0; i<num; i++) {
        response.push( col[i] )
      }
      // console.log({response})
      if (response.length > 1) {
        return response
      } else if (response.length === 1){
        return response[0]
      }
    return response
    },

    last: function(col, num=1) {
      let response = []
      for (let i=num; i>0; i--) {
        response.push( col[ col.length - i] )
      }
      if (response.length > 1) {
        return response
      } else {
        return response[0]
      }
    },

    // compact: function(col) {
    //   let bad = [false, null, 0, undefined, NaN]
    //   let response = []
    //   for (let i=0; i<col.length; i++) {
    //     // console.log({i}, col[i])
    //     if ( !bad.includes(col[i]) ) {
    //       // console.log(col[i], "not found in bad list")
    //       response.push(col[i])
    //     }
    //   }
    //   return response
    // },

    compact: function(col) {
      let bad = [false, null, 0, '0', undefined, NaN]
      let response = []
      for (let item in col) {
        if ( !bad.includes(item) ) {
          response.push(item)
        }
      }
      console.log(response)
      return response
    },

    sortBy: function(col, cb) {
      let response = cb(col)
      return response
    },

    flatten: function(col, single=false) {
      let response = []
      for (let i=0; i<col.length; i++) {
        if (single === false) {
          if (col[i].length > 1) {
            fi.each( fi.flatten( col[i] ), n => response.push(n))
            // console.log('recursively added', response)
          } else {
            response.push(col[i])
            // console.log('normal add', response)
          }
        } else {
          if (col[i].length > 1) {
            fi.each( col[i], n => response.push(n) )
          } else {
            response.push(col[i])
          }
        }
      }
      // console.log({response})
      return response
    },

    uniq: function(col, cb) {
      let response = []
      for (let i=0; i<col.length; i++){
        if (cb) {
          if (!response.includes(cb(col[i]))) {
            response.push(col[i])
          }
        } else {
          if (!response.includes(col[i])) {
            response.push(col[i])
          }
        }
      }
      return response
    },

    keys: function(obj) {
      return Object.keys(obj)
    },

    values: function(obj) {
      return Object.values(obj)
    },

    functions: function(obj) {
      return fi.filter( Object.keys(obj), n => typeof obj[n] === "function").sort()
    },


  }
})()

// console.log(fi.libraryMethod())
// console.log(fi.each({"a":1, "b":2, "c":3}))
// console.log( fi.filter( [1,2,3,4], n => n % 2 === 0 ) )
// console.log( fi.first( [1,2,3,4] ) )
// console.log( fi.last( [1,2,3,4], 2 ) )
// console.log( fi.compact( [false, null, 0, "", undefined, "and", NaN, "are", "all", "falsy"] ) )
// console.log( fi.flatten( [1, 2, 3, [4, 5], 6, [7, [8, 9]]], true ))
// console.log( fi.uniq( [1, 2, 2, 3, 4, 6, 9], false, (val => val % 3) ) )
// console.log(fi.functions(fi))
