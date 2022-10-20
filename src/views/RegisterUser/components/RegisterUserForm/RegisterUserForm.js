import React, { useState, useEffect  } from 'react'
import {Button, Container, TextField, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import { FormControl, Input, Select, InputLabel } from '@material-ui/core';
import { register } from 'store/actions';
import { useDispatch, useSelector,  } from 'react-redux';
import {useHistory} from 'react-router-dom'
import {CircularProgress} from '@material-ui/core';


const cities = [
    
  { name: 'Abottabad',
  value:'Abottabad',},
  { name: 'Ahmedpur East',
   value:'Ahmedpur East',},
   {name: 'Arif Wala',
   value:'Arif Wala',},
  {name:  'Attock',
  value:'Attock',},
   {name: 'Badin',
   value:'Badin',},
   {name: 'Bahawalnagar',
   value:'Bahawalnagar'},
  { name: 'Bahawalpur',
   value:'Bahawalpur'},
  { name: 'Bhakkar',
   value: 'Bhakkar'},
  {name:  'Bhalwal',
  value:'Bhalwal'},
{  name:  'Burewala',
  value:'Burewala'},
   {name: 'Chakwal',
   value:'Chakwal'},
  { name: 'Chaman',
   value:'Chaman'},
 { name:  'Charsadda',
  value:'Charsadda'},
{  name:  'Chiniot',
  value:'Chiniot'},
 {  name: 'Chishtian',
   value:'Chishtian'},
 {  name: 'Dadu',
   value:'Dadu'},
  { name: 'Daharki',
   value:'Daharki'},
  { name: 'Daska',
   value:'Daska'},
   {name: 'Dera Ghazi Khan',
   value:'Dera Ghazi Khan'},
  { name: 'Dera Ismail Khan',
   value:'Dera Ismail Khan'},
   {name: 'Faisalabad',
   value:'Faisalabad'},
  { name: 'Ferozwala',
   value:'Ferozwala'},
   {name: 'Ghotki',
   value:'Ghotki'},
  { name: 'Gojra',
   value:'Gojra'},
  { name: 'Gujranwala',
   value:'Gujranwala'},
  { name: 'Gujranwala Cantonment',
   value:'Gujranwala Cantonment'},
   {name: 'Gujrat',
   value:'Gujrat'},
  {name:  'Gwadar',
  value:'Gwadar'},
  { name: 'Hafizabad',
   value:'Hafizabad'},
 { name:  'Haroonabad',
  value:'Haroonabad'},
  { name: 'Hasilpur',
   value:'Hasilpur'},
{  name:  'Hub',
  value:'Hub'},
{   name: 'Hyderabad',
   value:'Hyderabad'},
 {  name: 'Islamabad',
   value:'Islamabad'},
  { name: 'Jacobabad',
   value:'Jacobabad'},
   {name: 'Jaranwala',
   value:'Jaranwala'},
   {name: 'Jatoi',
   value:'Jatoi'},
   {name: 'Jhang',
   value:'Jhang'},
   {name: 'Jhelum',
   value:'Jhelum'},
  { name: 'Kabal',
   value:'Kabal'},
  { name: 'Kamalia',
   value:'Kamalia'},
 {  name: 'Kamber Ali Khan',
   value:'Kamber Ali Khan'},
  { name: 'Kandhkot',
   value:'Kandhkot'},
   {name: 'Karachi',
   value:'Karachi'},
  { name: 'Kasur',
   value:'Kasur'},
  { name: 'Khairpur',
   value:'Khairpur'},
  {name:  'Khanewal',
  value:'Khanewal'},
   {name: 'Khanpur',
   value:'Khanpur'},
   {name: 'Khushab',
   value:'Khushab'},
{   name: 'Khuzdar',
   value:'Khuzdar'},{
   name: 'Kohat',
   value:'Kohat'},{
   name: 'Kot Abdul Malik',
   value:'Kot Abdul Malik'},{
   name: 'Kot Addu',
   value:'Kot Addu'},
   {name: 'Kotri',
   value:'Kotri'},
  { name: 'Kāmoke',
   value:'Kāmoke'},
  { name: 'Lahore',
   value:'Lahore'},
    {name: 'Larkana',
    value:'Larkana'},
   { name:'Layyah',
    value:'Layyah'},
    {name: 'Lodhran',
    value:'Lodhran'},
  { name: 'Mandi Bahauddin',
   value:'Mandi Bahauddin'},
   {name: 'Mansehra',
   value:'Mansehra'},
   {name: 'Mardan',
   value:'Mardan'},
   {name: 'Mianwali',
   value:'Mianwali'},
   {name: 'Mingora',
   value:'Mingora'},
   {name: 'Mirpur',
   value:'Mirpur'},
  {name:  'Mirpur Khas',
  value:'Mirpur Khas'},
  {name:  'Mirpur Mathelo',
  value:'Mirpur Mathelo'},
{  name:  'Multan',
  value:'Multan'},
{  name:  'Muridke',
  value:'Muridke'},
  {name:  'Muzaffarabad',
  value:'Muzaffarabad'},
  {name:  'Muzaffargarh',
  value:'Muzaffargarh'},
 { name:  'Narowal',
  value:'Narowal'},
 { name:  'Nawabshah',
  value:'Nawabshah'},
  {name:  'Nowshera',
  value:'Nowshera'},
  {name:  'Okara',
  value:'Okara'},
  {name:  'Pakpattan',
  value:'Pakpattan'},
 { name:  'Peshawar',
  value:'Peshawar'},
  { name: 'Quetta',
   value:'Quetta'},
  {name:  'Rahim Yar Khan',
  value:'Rahim Yar Khan'},
  {name:  'Rawalpindi',
  value:'Rawalpindi'},
 { name:  'Sadiqabad',
  value:'Sadiqabad'},
 { name:  'Sahiwal',
  value:'Sahiwal'},
  {name:  'Sambrial',
  value:'Sambrial'},
  {name:  'Samundri',
  value:'Samundri'},
 { name:  'Sargodha',
  value:'Sargodha'},
 { name:  'Shahdadkot',
  value:'Shahdadkot'},
 {name:   'Sheikhupura',
 value:'Sheikhupura'},
 {  name: 'Shikarpur',
   value:'Shikarpur'},
{ name:   'Sialkot',
 value:'Sialkot'},
{  name:  'Sukkur',
  value:'Sukkur'},
 { name:  'Tando Muhammad Khan',
  value:'Tando Muhammad Khan'},
 { name:  'Taxila',
  value:'Taxila'},
  {name:  'Turbat',
  value:'Turbat'},
 { name:  'Umerkot',
  value:'Umerkot'},
{  name:  'Vehari',
  value:'Vehari'},
  { name: 'Wah Cantonment',
   value:'Wah Cantonment'},
 {  name: 'Wazirabad',
   value:'Wazirabad'},
  ];


const useStyles= makeStyles((theme)=> ({
    formControl: {
        margin: theme.spacing(1),
        width:'90%',
      },
      formControl2: {

        width:'110%',
        margin:'1% 3%'
        
      },
      color: {
        color: '#ffffff',
        
      }

}))

const RegisterUserForm = () => {
  
    const dispatch = useDispatch();
    const navigate = useHistory()
  const initialValues = {
username : "" ,
email: "", 
password: "",
confirmpassword: "",
contact: "",
address: "",
geyserid: "",
geysername: "",
module : 'Smart Hybrid Geyser System ',
city : null,
code : null,
};
  const [formValues, setFormValues] = useState(initialValues) 
  const [formErrors, setFormErrors] = useState({ })
  const [isSubmit, setIsSubmit] = useState(false)
  const [data ,setData] = useState({
    loading:false
  })
  // const [Loading, setLoading]= (false)
  const handleChange =(e) => {
    const {name , value} = e.target
    setFormValues({...formValues, [name]: value});
    
  };
  const errors = {}
  const validate = (values) => {
    
    // if(!values.username){
    //   errors.username= " This field is required"
    // }
    // else 
    if (values.username.length < 4) {
      errors.username= " Username must be greater than 4"
    }
    // if(!values.email){
    //   errors.email= " This field is required"
    // }
    // if (!values.password) {
    //   errors.password = 'This field is required'
    // }
    //  else 
     if (values.password.length < 7 ) {
      errors.password = 'Password must be 8 characters long!'
    }
    // if ( !values.confirmpassword.length) {
    //   errors.confirmpassword= "This field is requried"
    // }
    //  else 
     
     if ( values.confirmpassword.length  !== values.password.length) {
      errors.confirmpassword= " password not match"
    }
  //   if (!values.contact)
  //   {
  //     errors.contact='This field is requied'
  //   }
  //  else 
   
   if (values.contact.length <= 10 )
    {
      errors.contact='Enter valid contact'
    }
    else 
    if (values.contact.length >=12 )
    {
      errors.contact='Enter valid contact'
    }
    // if (!values.address)
    // {
    //   errors.address='This field is required'
    // }
    // else 
    if (values.address.length < 10 )
    {
      errors.address='Enter Valid Address'
    }
    // if (!values.geyserid)
    // {
    //   errors.geyserid='Enter geyser Id'
    // }
    //  else 
     
     if (values.geyserid.length < 8 )
    {
      errors.geyserid='Enter Valid Geyser Id'
    }
    else if (values.geyserid.length > 16 )
    {
      errors.geyserid='Enter Valid Geyser Id'
    }
    //   if (!values.geysername)
    // {
    //   errors.geysername='This fied is required'
    // }
    // else 
    
    if (values.geysername.length <5 )
    {
      errors.geysername='Enter Valid Geyser name'
    }
    else if (values.geysername.length >16 )
    {
      errors.geysername='Enter Valid Geyser name'
    }
    // if(values.module === null){
    //   errors.module = 'Select Module first '
    // }
    // if(values.city === null){
    //   errors.city = 'Select city first '
    // }
    // if(values.code === null){
    //   errors.code = 'Select code  '
    // }
   
    // if (!errors.username && !errors.email && !errors.password && !errors.confirmpassword && !errors.contact 
    //   && !errors.address && !errors.city && !errors.code && !errors.geyserid && !errors.geysername
    //   )
    //   {
    //     setStatus(true)
    //   }

    return errors

  }
  
 

  
  
    const handleSubmit = (event) => {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
        event.preventDefault();    
          setFormErrors(validate(formValues))
          console.log( '+++++++++++++++++++++++++++')
    if (!errors.username && !errors.email && !errors.password && !errors.confirmpassword && !errors.contact 
      && !errors.address && !errors.city && !errors.code && !errors.geyserid && !errors.geysername
      )
        {
          setData({
            ...data,
            loading : true
          })
       
          dispatch(register(formValues)).then(res=>{
            console.log(res, 'Response is ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
            //   if(res.res == 'undefined' || res.res == null)
            //   {
            //     setData({
            //       ...data,
            //       loading : true
            //     })

            //   }

            //   else 
            //   setData({
            //     ...data,
            //     loading : false
            //   })
            //   const resp = res.res.data
            // alert(
            
            //   resp.message
            //   )

                  // navigate.push('/auth/login')
          })
        
        }
     
        


      };
      useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){

        }

      }, [formErrors])
      const classes = useStyles()
     
     
   
  return (
    
   
    <form
   onSubmit={handleSubmit}
   
    >
        <Container  >
        <FormControl className={classes.formControl}  size='small'>
          {/* <InputLabel style={{margin:'-2% 0% 0% 2%'}}  > Select Module</InputLabel>
          <Select variant='outlined' name='module'  value={formValues.module} label='Select Module' onChange={handleChange} required>
         <MenuItem value={'Smart Geyser System'}> Smart Geyser System</MenuItem>
         <MenuItem value={'Smart Hybrid Geyser System '}> Smart Hybrid Geyser System</MenuItem>
          </Select> */}
          <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.module}</p>
          <TextField variant='outlined' name='username' autoComplete='off' value={formValues.username} onChange={handleChange} size='small' label='Username' style={{marginTop:'2%',}}
          required
          /> <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.username}</p>
          <TextField variant='outlined' name= 'email' autoComplete='off'  type='email' value={formValues.email}  onChange={handleChange} size='small' label='Email ID' style={{marginTop:'2%'}} 
          required
          /> <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.email}</p>
          <TextField variant='outlined' name='password' autoComplete='off' type='password'  value={formValues.password} onChange={handleChange} size='small' label='Password' style={{marginTop:'2%'}} 
          required
          /> <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.password}</p>
          <TextField variant='outlined' type='password' autoComplete='off' name='confirmpassword' value={formValues.confirmpassword}  onChange={handleChange} size='small' label='Confirm Password' style={{marginTop:'2%'}}
          required
          /> <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.confirmpassword}</p>
          <TextField variant='outlined' value={formValues.contact} autoComplete='off' name='contact'  onChange={handleChange} size='small' label='Contact' style={{marginTop:'2%'}} 
          required
          /> <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.contact}</p>
          <TextField variant='outlined' name ='address' autoComplete='off' value={formValues.address}  onChange={handleChange} size='small' label='Address' style={{marginTop:'2%'}} 
         required
          /> <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.address}</p>
         
        </FormControl>
        <FormControl className={classes.formControl} size='small'>
            <InputLabel style={{margin:'-2% 0% 0% 2%'}}> Select City</InputLabel>
          <Select variant='outlined' name= "city" value={formValues.city} label='Select City' onChange={handleChange} required>
         {
            cities.map((item) => {
                return (
                    <MenuItem value={item.value}> {item.name}</MenuItem>
                )
            })
         }
       
         </Select>
         <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.city}</p>
        </FormControl>
       <div style={{display:'flex', flexDirection:'row',marginLeft:'1%'}}>
        <div>
        <FormControl className={classes.formControl2} size='small' >
        <InputLabel style={{margin:'-2% 0% 0% 2%'}} > Code
         </InputLabel>
         <Select variant='outlined' name='code' value={formValues.code} label='Code' onChange={handleChange} required>

         <MenuItem value={'sns'}> SNS </MenuItem>
         <MenuItem value={'cnn'}> CNN </MenuItem>
         
        

         </Select> 
         <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.code}</p>
        </FormControl>

        </div>
      
        <div style={{marginLeft:'1%'}}>
        <TextField label='Geyser ID ' name ='geyserid' autoComplete='off' value={formValues.geyserid}  onChange={handleChange} variant='outlined' size='small' style={{width:'80%', marginLeft:'5%'}}
        required
        /> <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.geyserid}</p>
        </div>
        
       </div>
      <FormControl className={classes.formControl}>
      <TextField variant='outlined' name='geysername' autoComplete='off' value={formValues.geysername}  onChange={handleChange} size='small' label='Geyser Name' style={{marginTop:'1%'}} 
    required
      /> <p style={{color:'red', fontSize:'15px',marginBottom:'-1%'}}>{formErrors.geysername}</p>
      <Button variant='contained' color='primary' style={{width:'100%', marginTop:'3%',}} type='submit'> 
         {
          data.loading ?
          <CircularProgress
          className={classes.color}
            color="secondary"
            size='1.5rem'
            /> :
            <Typography
            className={classes.color}
            variant="body2"
          >
            Register
          </Typography>

         }
         
          </Button>
       
      </FormControl>
         
        </Container>
       


        
            

    </form>
  )
}

export default RegisterUserForm
