const hashDictionary = hash => {
    let files = [];
    for(let key in hash) {
        if( typeof hash[key] === 'object'){
           let folder = key;
           let nestedFiles = hashDictionary(hash[key]);
           nestedFiles.forEach(file => {
            files.push(`${folder}/${file}`);
           });
        } else {
            files.push(key);
        }
    }
    return files;
};

let files = {
  'a' : {
    'b' : {
      'c' : {
        'd' : {
          'e' : true
        },

        'f' : true
      }
    }
  }
};

console.log(hashDictionary(files));
// hashDictionary(files);