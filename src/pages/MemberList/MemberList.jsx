const MemberList = (props) => {
  return ( 
    <>
    <h3>Meet Our Club</h3>
    {!props.newMembers.length && <h2>No Members here</h2>}
    <ul>
      {props.newMembers.map((newMember)=>(
        <li key={newMember._id}>
          {newMember.first_name} {newMember.last_name}
          <i>{newMember.role}</i>
        </li>
      ))}
    </ul>
    </>
  );
}

export default MemberList;