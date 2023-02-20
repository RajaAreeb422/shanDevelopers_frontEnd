import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import custom from '../styles/custom.module.css'
import { useState,useEffect} from 'react'
import React from 'react'
import axios from 'axios'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  router from 'next/router'
import Table from "react-bootstrap/Table";
import MyNavbar from '../components/Navbar'
import Footer from '../components/foot/Footer'

export default function Home() {
  const [text, setText] = useState();
  const [otext, setOText] = useState();
  const [ctext, setCText] = useState();
  const [record, setRecord] = useState({
    sr_no:null,
    plot_size:'',
    dealer_name:'',
    status:''
  });
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [omodal, setOModal] = React.useState(false);
  const otoggle = () => setOModal(!omodal);
  const [cmodal, setCModal] = React.useState(false);
  const ctoggle = () => setCModal(!cmodal);
  const [errormodal, setErrorModal] = React.useState(false);
  const errortoggle = () => setErrorModal(!errormodal);
  const [dberrormodal, setDBErrorModal] = React.useState(false);
  const dberrortoggle = () => setDBErrorModal(!dberrormodal);
  const [file,setState]=useState('')
  const [data,setData]=useState([])
  const [owners,setOwners]=useState([])
  const [owner,setOwner]=useState({
    sNo:null,
    appFormNo:null,
    name:null,
    mobile:null,
    retailer_name:null,
    block:null,
    plot_size:null,
    category:null,
  })

  const [certificates,setCertificates]=useState([])

  useEffect(() => {
    
    // const config = {
    //   headers: {
    //     Authorization: 'Bearer ' + localStorage.getItem('token'),
    //   },
    // };
    axios
      .get(`https://your_url`)
      .then(response => {
        setData(response.data.data);

      })
      .catch(err => console.log(err));
     
      axios
      .get(`https://your_url`)
      .then(response => {
        setOwners(response.data.data);
      })
      .catch(err => console.log(err));


     
      axios
      .get(`https://your_url`)
      .then(response => {
        setCertificates(response.data.data);

      })
      .catch(err => console.log(err));

  }, []);

  const handleChange=(e)=>{
    setText(e.target.value)

  }
  const handleOChange=(e)=>{
    setOText(e.target.value)

  }
  const handleCTextChange=(e)=>{
    setCText(e.target.value)
  }
  const verifyFormNo=()=>{
    if(text==null || text=='')
    {
     errortoggle()
    }
    else{

    
   let status=false
    data.map(it=>{
      if(it.app_form_no.toLowerCase()==text.toLowerCase())
      {
        setRecord(it)
        toggle()
        status=true
      }
    })
    if(status==false)
    dberrortoggle()

  }
}

const verifyOFormNo=()=>{
  if(otext==null || otext=='')
  {
   errortoggle()
  }
  else{

 let status=false
 
  owners.map(it=>{
    // if(it.app_form_no!=undefined)
    // {

    if(it.appFormNo.toLowerCase()==otext.toLowerCase())
    {
     
      setOwner(it)
      otoggle()
      status=true
    }
 // }
  })
  if(status==false)
  dberrortoggle()

}
}



const clear=()=>{
setText('')
toggle()
}

const clearOText=()=>{
  setOText('')
  otoggle()
  }

const clearCText=()=>{
  setCText('')
  ctoggle()
  }

const verifyCertificateNo=()=>{
  if(ctext==null || ctext=='')
  {
   errortoggle()
  }
  else{

  
 let status=false
  certificates.map(it=>{
    if(it.cr_no.toLowerCase()==ctext.toLowerCase())
    {

      ctoggle()
      status=true
    }
  })
  if(status==false)
  dberrortoggle()

}
  }

  return (
    <div className={styles.container}>
    <Head>
        <title>Home</title>
        <link rel="icon" href="/logo.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={custom.body}>
      <MyNavbar/>
  
    <div className={custom.formBody}>
    <div className={custom.mainDiv}>   
        <div className={custom.formItems}>
            <h3>File Verification  </h3>
            <p>For Property Owner.</p>
            <div className={custom.requiresValidation} novalidate>

                <div className={custom.formFiled}>
                    <input className={custom.formControl} type="text" 
                     value={otext}
                     onChange={(e)=>handleOChange(e)}
                     name="name"
                     placeholder="Please Enter Verification Form No" required/>
                </div>

                <div className={custom.formButton}>
                    <button id="submit" type="submit" onClick={verifyOFormNo}
                    className={custom.btnPrimary}>
                      Verify</button>
                </div>
            </div>

        </div>
     
        <div className={custom.formItems}>
            <h3>File Verification </h3>
            <p>For Dealer</p>
            <div className={custom.requiresValidation} novalidate>

                <div className={custom.formFiled}>
                    <input className={custom.formControl} type="text" 
                     value={text}
                     onChange={(e)=>handleChange(e)}
                     name="name"
                     placeholder="Please Enter Verification Form No" required/>
                </div>

                <div className={custom.formButton}>
                    <button id="submit" type="submit" onClick={verifyFormNo}
                    className={custom.btnPrimary}>
                      Verify</button>
                </div>
            </div>

        </div>

        <div className={custom.formItems}>
            <h3 style={{width:'100%'}}>Adjustment Certificate Verification </h3>
            <p>Fill in Adjustment Certificate  Number below.</p>
            <div className={custom.requiresValidation} novalidate>

                <div className={custom.formFiled}>
                    <input className={custom.formControl} type="text" 
                     value={ctext}
                     onChange={(e)=>handleCTextChange(e)}
                     name="name"
                     placeholder="Please Enter Adjustment Certificate No" required/>
                </div>

                <div className={custom.formButton}>
                    <button id="submit" type="submit" onClick={verifyCertificateNo}
                    className={custom.btnPrimary}>
                      Verify</button>
                </div>
            </div>

        </div>
</div>





</div>
</div>

<Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
        {
          record.status.toLowerCase()=='blocked'?
          <div style={{display:'flex',justifyContent:'center',width:'400px'}}>
            <img style={{width:'40px'}} src="/Blocked.png"/>
            <p style={{marginTop:'20px',margin:'10px',color:'red'}}>Blocked</p>
            </div>
            :
            <div style={{display:'flex',justifyContent:'center',width:'400px'}}>
            <img style={{width:'40px'}} src="/download.png"/>
            <p style={{marginTop:'20px',margin:'10px'}}>Verified </p>
            </div>        
         }
        </ModalHeader>
        <ModalBody>
        <Table  striped bordered hover>
                <thead>
                  <tr>
                    <th>SR No</th>
                    <th>Plot Size</th>
                    <th>Dealer Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>{record.sr_no}</td>
                    <td>{record.plot_size}</td>
                    <td>{record.dealer_name}</td>
                  </tr>
                 
                </tbody>
              </Table>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={clear}>
            OK
          </Button>
        </ModalFooter>
      </Modal>


     <Modal isOpen={omodal} toggle={otoggle}>
        <ModalHeader toggle={otoggle}>
          <div style={{display:'flex',justifyContent:'center',width:'400px'}}>
            <img style={{width:'40px'}} src="/download.png"/>
            <p style={{marginTop:'20px',margin:'10px'}}>Verified</p>
            </div>
        </ModalHeader>
        <ModalBody>
        <Table  striped bordered hover>
                <thead>
                
                </thead>
                <tbody>
                  <tr>
                     <th>SR No</th>      
                    <td>{owner.sNo}</td>
                    </tr>
                    <tr>
                    <th>Owner Name</th>
                    <td>{owner.name}</td>
                    </tr>
                    <tr>
                    <th>Mobile No</th>
                    <td>{owner.mobile}</td>
                    </tr>
                    <tr>
                    <th>Dealer</th>
                    <td>{owner.retailer_name}</td>
                    </tr>
                    <tr>
                    <th>Block</th>
                    <td>{owner.block}</td>
                    </tr>
                    <tr>
                    <th>Plot Size</th>
                    <td>{owner.plot_size}</td>
                    </tr>
                    <tr>
                    <th>Plot Category</th>
                    <td>{owner.category}</td>
                  </tr>
                 
                </tbody>
              </Table>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={clearOText}>
            OK
          </Button>
        </ModalFooter>
      </Modal>  



      
      <Modal isOpen={cmodal} toggle={ctoggle}>
        <ModalHeader toggle={ctoggle}>
          <div style={{display:'flex',justifyContent:'center',width:'400px'}}>
            <img style={{width:'40px'}} src="/download.png"/>
            <p style={{marginTop:'20px',margin:'10px'}}>Verified</p>
            </div>
        </ModalHeader>
        <ModalBody>
         <center>
         <h5>Certificate is Verified</h5>
          </center>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={clearCText}>
            OK
          </Button>
        </ModalFooter>
      </Modal>



     
      <Modal isOpen={errormodal} toggle={errortoggle}>
        <ModalHeader toggle={errortoggle}>Alert</ModalHeader>
        <ModalBody>
          <>!Please Add Verification Form No</>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={errortoggle}>
            OK
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={dberrormodal} toggle={dberrortoggle}>
        <ModalHeader toggle={dberrortoggle}>Alert</ModalHeader>
        <ModalBody>
          <div style={{display:'flex',justifyContent:'center',width:'400px'}}>
            <img style={{width:'40px'}} src="/error.png"/>
            <p style={{marginTop:'20px',margin:'10px'}}>!Verification Failed</p>
            </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={dberrortoggle}>
            OK
          </Button>
        </ModalFooter>
      </Modal>



<Footer/>

</div>
  )
}
