const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, callback) {
      for(let key in obj){
        callback(obj[key])
      }
      return obj
    },

    map: function(obj, callback) {
      const result = []
      for(let key in obj){
        result.push(callback(obj[key]))
      }
      return result
    },

    reduce: function(obj, callback, initial) {
      let result = initial || obj[0]
      for(let i = initial ? 0 : 1; i < obj.length; i++){
        result = callback(result, obj[i])
      }
      return result;

    },

    find: function(obj, callback) {
      for(let key in obj){
        if(callback(obj[key])){
          return obj[key]
        }
      }
      return undefined
    },

    filter: function(obj, callback){
      let result = []
      for(let key in obj){
        if(callback(obj[key])){
          result.push(obj[key])
        }
      }
      return result;
    },

    size: function(obj){
      return Object.keys(obj).length
    },

    first: function(arr, n = 1){
      const result = []
      if (arr.length >= n){
        for(let i = 0; i < n; i++){
          result.push(arr[i])
        }
      }
      return result.length === 1 ? result[0] : result
    },

    last: function(arr, n = 1){
      const result = []
      if(arr.length >= n){
        for(let i = n; i > 0; i--){
          result.push(arr[arr.length-i])
        }
      }
      return result.length === 1 ? result[0] : result
    },

    compact: function(arr){
      const result = []
      for(let i = 0; i < arr.length; i++){
        if(arr[i]){
          result.push(arr[i])
        }
      }
      return result
    },

    sortBy: function(arr, modifier){
      const result = [...arr]
      return result.sort( (a,b) => {
        return modifier(a) - modifier(b)
      })
    },

    flatten: function(arr, singleLevel = false){
      let result = []
      for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
          if(singleLevel){
            for(let j = 0; j < arr[i].length; j++){
              result.push(arr[i][j])
            }
          } else {
            result = result.concat(fi.flatten(arr[i]))
          }

        } else {
          result.push(arr[i])
        }
      }
      return result
    },

    uniq: function(arr, isSorted, callback){
      let result = []
      if(!isSorted){
        const found = {}
        for(let value of arr){
          const cbValue = callback ? callback(value) : value
          if(!found[JSON.stringify(cbValue)]){
            found[JSON.stringify(cbValue)] = true
            result.push(value)
          }
        }
      } else {
        result = [...arr]
        for(let i = 0; i < result.length-1; i++){
          if(JSON.stringify(result[i]) === JSON.stringify(result[i+1])){
            result.splice(i+1, 1)
            i--;
          }
        }
      }
      return result
    },

    keys: function(obj){
      return Object.keys(obj)
    },

    values: function(obj){
      return Object.values(obj)
    },

    functions: function(obj){
      const result = []
      for(let key in obj){
        if(typeof obj[key] === 'function'){
          result.push(obj[key])
        }
      }
      return result
    }


  }
})()

fi.libraryMethod()
