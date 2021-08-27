import React ,{useState ,useEffect} from 'react';
//import BubbleSort from './bubblesort';
import './Bar.css';

const getRandomint = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

function SortingVisualizer() {

    const resetfilter = () =>{
       
        setDisable(false);
        setActiveIndex(null);
        setHeight(null);       
        const ar = [];
    
        for(let i=0;i<180 ;i++)
        {
         ar.push(getRandomint(100,500));
         }
         setArray(ar);
    }   
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      
      /*Use like so*/
      
     async function insertionSort() {
        setDisable(true);
        let N = array.length;
        let i, j, key;
     
        for (i = 1; i < N; i++) {
            j = i;
     
            // Insert V[i] into list 0..i-1
            while (j > 0 && array[j] < array[j - 1]) {
     
                // Swap V[j] and V[j-1]

                const numFruit = await  swapheight(j,j-1,array);
                await sleep(40);   

                let temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
                // Decrement j by 1
                j -= 1;
            }
        }
    }
     async function selectionSort() { 
        setDisable(true);
        let n = array.length;
            
        for(let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
            let min = i;
            for(let j = i+1; j < n; j++){
                if(array[j] < array[min]) {
                    min=j; 
                }
             }
             if (min !== i) {
                 // Swapping the elements
                 const numFruit = await  swapheight(i,min,array);
                 await sleep(40);    

                 let tmp = array[i]; 
                 array[i] = array[min];
                 array[min] = tmp;      
            }
        }
        
    }


    async function bubblesort() {
        setDisable(true);
        let n = array.length;
        
        for (let i = 0; i < n-1; i++)
        {      
        for (let j = 0; j < n-i-1; j++)
        { 
           
            if (array[j] > array[j+1]) 
                { 
               // console.log(array[j] + " " + array[j+1]);
                
                const numFruit = await  swapheight(j,j+1,array);
                await sleep(40);
                //console.log("avi");
                 
                    
                    console.log("a");
                    let temp = array[j+1];
                    array[j+1] = array[j];
                    array[j] = temp; 
              
                }
        }
        }
 
        
    }
     
    const IndexBar = (index , val) =>{
        setActiveIndex(index);
        setHeight(val);
    }

    async  function swapheight(a,b,array){
          
       // console.log("aman");
          
             await IndexBar(a, array[b]);
             console.log("b");
            // setTimeout(()=>{
            //     console.log("b");
            //     setActiveIndex(a);
            //     setHeight(array[b]);
            // },10)
            await IndexBar(b, array[a]);
            console.log("c");
            // setTimeout(()=>{
            //     console.log("c");
            //     setActiveIndex(b);
            //     setHeight(array[a]);
            // },20)
            
            return "0";
         
    }
    const [array, setArray] = useState([]);
    const [activeIndex,setActiveIndex] = useState(null);
    const [height ,setHeight] = useState(null);
    const [disable ,setDisable] = useState(false); 
    useEffect(() => {
       resetfilter();
    },[]);  
    
return(
   
    <div className="barcontainer">
    {array && array.map((value , idx) => (
        
        <div className= "numbar"
        key={idx}
        style={idx === activeIndex ? {height : height+"px" , backgroundColor : "red"} : {height : `${value}px` , backgroundColor :"turquoise"} }
        >
        
        </div>
    ))}
    <div>
    <button  className="button" style={{backgroundColor :"#686868" }} onClick={()=>resetfilter()}>New Random Array</button>
    <button className="button" disabled={disable} style={disable === true ? {backgroundColor:"#A9A9A9"} : {backgroundColor :"#686868"}} onClick={()=>bubblesort()}>Bubble Sort</button>
    <button className="button" disabled={disable} style={disable === true ? {backgroundColor:"#A9A9A9"} : {backgroundColor :"#686868"}} onClick={()=>selectionSort()}>Selection Sort</button>
    <button className="button" disabled={disable}  style={disable === true ? {backgroundColor:"#A9A9A9"} : {backgroundColor :"#686868"}} onClick={()=>insertionSort()}>Insertion Sort</button>
    </div>
    </div>
    
);
}


export default SortingVisualizer;