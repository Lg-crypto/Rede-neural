class Matrix{
    constructor(rows, cols){
        //cria uma matriz
        this.rows = rows;
        this.cols = cols;
        this.arr = [];
        this.data = [];

        for (let i = 0; i < this.rows; i++) {
            
            for (let j = 0; j < this.cols; j++) {
                
               
                this.arr.push(Math.floor(Math.random()*10))
                
            }
            
            this.data.push(this.arr)

        }
    }

    map(func){

        this.data = this.data.map((arr,i)=>{
            console.log(matrix)
            matrix.map()
            
        })

    }

    static add(A,B){
        //multiplica as matrizes
        var matrix = new Matrix(A.rows, B.cols);

        matrix.map((elm)=>{
            return elm*2
        })
        console.log(matrix.data)
    }

}