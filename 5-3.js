class SparseArray {
    constructor() {
      this.hash = {};
    }

    init(arr=[]) {
        for(let i = 0; i < arr.length; i++){
            if (arr[i] !== 0) {
                this.hash[i] = arr[i];
            }
        }
    }
  
    set(i, val){
        if (i !== 0) {
            this.hash[i] = val;
        } else {
            delete this.hash[i];
        }
    }

    get(i){
        return this.hash[i] ? this.hash[i] : 0;
    }

    toString() {
        Object.keys(this.hash).forEach(key => {
            var value = this.hash[key];
            console.log(`${key}: ${value}`);
        });
        console.log('\n');
    }
}

let sparseArray = new SparseArray();
sparseArray.init([0,1,0,0,2,0,0,0,3,0,0,0,0,4,0,0,0,0,0,5]);
sparseArray.toString();
sparseArray.set(21, 6);
sparseArray.toString();