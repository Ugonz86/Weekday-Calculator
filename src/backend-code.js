
export function Sudoku(array) {
  this.array = array;
}

Sudoku.prototype.checkColumns = function() {
  for(let row=0; row < this.array.length; row++){
    this.array[row].sort();
    //console.log(this.array[row]);
    for(let col=0;col<this.array.length-1; col++){
      if(this.array[row][col]>=this.array[row][col+1]){
        return false;
      }
    }
  }
  return true;

};

Sudoku.prototype.checkRows = function()
{
  let tempArray = [];
  for(let col=0; col<this.array.length; col++)
  {
    for(let row=0; row<this.array.length; row++)
    {
      tempArray.push(this.array[row][col])
    }

    tempArray.sort();
    for(let idx=0; idx<tempArray.length-1;idx++)
    {
      if(tempArray[idx]>=tempArray[idx+1])
      {
        console.log(tempArray[idx],tempArray[idx+1]);
        return false;
      }

      tempArray.length = 0;
    }
  }
  return true;

};



Sudoku.prototype.check3x3 = function()
{

  let idx = 0;
  let tempArray = [];
  while(idx<3){

    for(let row=0; row<9;row++)
    {
      if(idx===0 && row<3)
      {
        for(let col=0; col<3; col++)
        {
          tempArray.push(this.arrray[row][col]);


        }
        console.log(tempArray);
        if(row===2)
        {
          for(let i=0; i<tempArray.length-1; i++)
          {
            if(tempArray[i]>=tempArray[i+1]){
              return false;
            }
          }

        }
        tempArray.length=0;
        console.log(idx,row);
      }

/*

       if(idx===1 && row>=3 && row<6)
      {
        for(let col=3; col<6; col++)
        {
          tempArray.push(this.arrray[row][col]);
        }
        if(row===5)
        {
          for(let i=0; i<tempArray.length-1; i++)
          {
            if(tempArray[i]>=tempArray[i+1]){
              return false;
            }
          }
          tempArray.length=0;
          console.log(idx,row);
        }
      }



      if(idx===2 && row>=6 && row<9)
      {
        for(let col=6; col<9; col++)
        {
          tempArray.push(this.arrray[row][col]);
        }
        if(row===8)
        {
          for(let i=0; i<tempArray.length-1; i++)
          {
            if(tempArray[i]>=tempArray[i+1]){
              return false;
            }
          }
          tempArray.length=0;
          console.log(idx,row);
        }
      }*/


      idx++;
    }
  }
  return true;
}
  // let tempArray = [];
  //
  //   for(let col=0;col<3;col++)
  //   {
  //     for(let row=0;row<3;row++)
  //     {
  //       console.log(this.array[col][row]);
  //       tempArray.push(this.array[col][row]);
  //
  //       // if array[row][col] === array[row][col];
  //     }
  //   }
  // //clear
  //   console.log(tempArray);
  //
  // }

  // for(let row=0; row.array.length;row++)
  // {
