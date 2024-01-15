let a=[2,3,4,5],count=1;
for(let i=a.length;i>0;i--)
{
    if(a[i]>a[[i-1]])
        {
            count++;
        }
}
console.log("The Buildings Will Enjoy The Sunrise Are : "+count);