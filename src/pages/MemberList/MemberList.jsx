const MemberList = (props) => {
  return ( 
    <>
    <h3>Meet Our Club</h3>
    {!props.newMembers.length && <h2>No Members here</h2>}
    <ul>
      {props.newMembers.map((newMember)=>(
        <li key={newMember._id}>
          {newMember.name}
        </li>
      ))}
    </ul>
    </>
   );
}
 
export default MemberList;