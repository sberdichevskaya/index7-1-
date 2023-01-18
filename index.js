let mas1 = [[1,4,5],
           [1,3,4],
           [2,6]];
let mas2 = [];
let temp;

for (let i = 0; i < mas1.length; i++)
{
  for (let j = 0; j < mas1[i].length; j++)
  {
    //console.log(mas[i].length);
    temp = mas1[i][j];
    mas2.push(temp);
    console.log(mas1[i][j]);
  }
}

function selectionSort(mas)
{
    for (let i = 0; i < mas.length; i++)
    {
        let indexMin = i;
        for (let j = i+1; j < mas.length; j++)
        {
            if(mas[j] < mas[indexMin])
            {
                indexMin = j;
            }
        }
        let temp = mas[i];
        mas[i] = mas[indexMin];
        mas[indexMin] = temp;
    }
    return mas;
}

console.log(selectionSort(mas2))