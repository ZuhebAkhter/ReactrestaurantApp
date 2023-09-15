import React,{useRef,useState} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
    const [amountIsValid,setAmountIsValid]=useState(true)
    const amountInputRef=useRef();
const submitHandler=event=>{
    event.preventDefault();
    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNum=+enteredAmount;
    if(enteredAmount.trim().length==0 || enteredAmountNum < 1 || enteredAmountNum > 5){
        return;
    }{
        setAmountIsValid(false);
    }
    props.onAddToCart(enteredAmountNum);
    console.log(enteredAmountNum)
}

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input  ref={amountInputRef} label="Amount" input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            defaultValue:'1'
        }}/>
        <button>+ Add</button>
        {!amountIsValid && ''}
    </form>
  )
}

export default MealItemForm