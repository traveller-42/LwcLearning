import { api, LightningElement, wire } from 'lwc';
import getContact from '@salesforce/apex/TestingApexFromLwc.getContact';
import getAccount from '@salesforce/apex/TestingApexFromLwc.getAccount';
export default class NewLwc extends LightningElement {
 gretting ='Welcome Siamul';
 inputText = '';
 @api message='Hey I am Using LWC';
 result;
 error;
 @wire(getContact)
 wiredData({error,data}){
     if(data){
       this.result=data;
       this.error=undefined; 
       console.log('Recod of Contact',data);
     }
     else if(error){
        this.error=error;
        this.result=undefined;
        console.log('Error',error);
     }
 }
 handleClick(event){
      this.inputText=event.target.value ;
      window.console.log('Event Target',event.target);
 }
 handleSubmit(){
     alert('Button Clicked');
     getAccount()
     .then(result=>{
         this.result =result;
         this.error=undefined;
     })
     .catch(error=>{
         this.error=error ;
         this.result=undefined;
     });
 }

}