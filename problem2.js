let subs='nitin';
let c=0;
 function palindrom(str)
 {
        c=0;
        for(k=0;k<=(str.length/2);k++)
        {
                if(str[k]==str[str.length-k-1])
                {
                    c++;
                }
        }
            if(c >= (str.length/2))
            {
               return true;
             }      
        else
            {
          return false;
            }
 }
console.log(palindrom(subs));
  