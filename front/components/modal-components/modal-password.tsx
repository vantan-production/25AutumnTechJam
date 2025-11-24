export function ModalPass () {
    return (
        <div className="flex border-2 border-green w-60 h-10 mt-4 mx-auto rounded-md">
            <img className="w-6 h-6 my-auto mx-2"src="images/lock.png" alt="lock" />
            <input 
            type="text"
            placeholder="Password"
            className="p w-full text-green"
            />
        </div>
    )
}

export default ModalPass;