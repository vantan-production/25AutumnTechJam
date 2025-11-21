export function ModalEmail () {
    return ( 
    <div className="flex border-2 border-green w-60 h-10 m-auto rounded-md">
        <img  className="w-6 h-6 my-auto mx-2" src="images/mail.png" alt="email" />
        <input
        type="text"
        placeholder="Email"
        className="p w-full"
        />
    </div>
)}

export default ModalEmail;