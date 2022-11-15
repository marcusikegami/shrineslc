

const Contact = () => {
    const email = process.env.EMAIL || 'abandnamedshrine@gmail.com';
    const phone = process.env.PHONE_NUMBER || '1-385-389-7766';

    return (
        <div id="contact" className="text-p flex flex-col items-center pt-16">
            <h1 className="font-bold text-3xl text-darkpurple py-4">Contact</h1>
                <h3 className="text-xl font-medium py-2 ">Management:</h3>
                <h4 className="hover:CLRLTR text-lg"><a className="text-darkpurple hover:text-magenta" href="mailto:abandnamedshrine@gmail.com">{email}</a></h4>

                <h3 className="text-xl font-medium py-2 ">Phone:</h3>
                <h4 className="hover:CLRLTR text-lg"><a  className="underline underline-offset-4 text-darkpurple hover:text-magenta" href="tel:+1-385-389-7766">{phone}</a></h4>
        </div>
    )
};

export default Contact;