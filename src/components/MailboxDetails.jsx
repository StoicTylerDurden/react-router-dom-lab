// src/components/MailboxDetails.jsx
import { useParams } from "react-router-dom"; 


const MailboxDetails = (props) => {


const { mailboxId } = useParams();
const selectedBox = props.mailboxes.find(
  (mailbox) => mailbox._id === Number(mailboxId)
);
console.log('mailBox: ', selectedBox)

// If user clicks on a mailbox that doesn't exist
if (!selectedBox) {
  return <p>Mailbox not found.</p>; 
}

return(
    <>
    <h2>Mailbox Details</h2>
    <p>Boxholder: {selectedBox.boxholder}</p>
    <p>Box Size: {selectedBox.boxSize}</p>
    </>
)
};

export default MailboxDetails;
