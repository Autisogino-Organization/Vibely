import MemberInner from "./memberInner";

function MembersGroup({ group, members }) {
  return (
    <div className="flex flex-col items-start text-white">
      <span className="text-[12px] w-full font-semibold pl-3 pt-2">{group}</span>
      <div className="flex flex-col text-nowrap w-full items-center">
        {members.map((member) => (
          <MemberInner pfp={member.pfp} author={member.author} />
        ))}
      </div>
    </div>
  );
}

export default MembersGroup;
