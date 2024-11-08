// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// import './Join.css'

// const Join = () => {

//     const form = useRef()

//     const sendEmail = (e) => {
//         e.preventDefault();
    
//         emailjs.sendForm('service_h9g0btg', 'template_5urckpa', form.current, 'GJAtl73WZaFyf9KlA')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           });
//     };

//     return (
//         <div className="Join" id="join-us">
//             <div className="left-j">
//                 <hr />
//                 <div>
//                     <span className="stroke-text">READY TO</span>
//                     <span>LEVEL UP</span>
//                 </div>
//                 <div>
//                     <span>YOUR BODY</span>
//                     <span className="stroke-text">WITH US?</span>
//                 </div>
//             </div>
//             <div className="right-j">
//                 <form 
//                     ref={form} 
//                     className="email-container" 
//                     onSubmit={sendEmail}
//                 >
//                     <input 
//                         type="email" 
//                         name="user_email" 
//                         placeholder="Enter your email address"
//                     />
//                     <button className="btn btn-j">Join Now</button>
//                 </form>
//             </div>
//         </div>
//   )
// }

// export default Join;

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// import './Join.css'

// const Join = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_h9g0btg', 'template_5urckpa', form.current, 'GJAtl73WZaFyf9KlA')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//     };

//     return (
//         <div className="Join" id="join-us">
//             <div className="left-j">
//                 <hr />
//                 <div>
//                     <span className="stroke-text">READY TO</span>
//                     <span>LEVEL UP</span>
//                 </div>
//                 <div>
//                     <span>YOUR BODY</span>
//                     <span className="stroke-text">WITH US?</span>
//                 </div>
//             </div>
//             <div className="right-j">
//                 <form 
                
//                     ref={form} 
//                     className="email-container" 
                    
//                     onSubmit={sendEmail}
//                 >
//                     <input 
//                         type="text" 
//                         name="user_name" 
//                         placeholder="Enter your name" 
//                         required
//                     />
//                     <input 
//                         type="number" 
//                         name="user_age" 
//                         placeholder="Enter your age" 
//                         required
//                     />
//                     <input 
//                         type="text" 
//                         name="user_address" 
//                         placeholder="Enter your address" 
//                         required
//                     />
//                     <input 
//                         type="tel" 
//                         name="user_number" 
//                         placeholder="Enter your phone number" 
//                         required
//                     />
//                     <input 
//                         type="email" 
//                         name="user_email" 
//                         placeholder="Enter your email address" 
//                         required
//                     />
//                     <button className="btn btn-j">Join Now</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Join;


import React from 'react';
import './Join.css';

const Join = () => {
    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form 
                    action="mailto:chaubeyankit3449@gmail.com" 
                    method="post" 
                    enctype="text/plain"
                    className="email-container"
                >
                    <input 
                        type="text" 
                        name="user_name" 
                        placeholder="Enter your name" 
                        required
                    />
                    <input 
                        type="number" 
                        name="user_age" 
                        placeholder="Enter your age" 
                        required
                    />
                    <input 
                        type="text" 
                        name="user_address" 
                        placeholder="Enter your address" 
                        required
                    />
                    <input 
                        type="tel" 
                        name="user_number" 
                        placeholder="Enter your phone number" 
                        required
                    />
                    
                    <button type="submit" className="btn btn-j">Join Now</button>
                </form>
            </div>
        </div>
    );
}

export default Join;


