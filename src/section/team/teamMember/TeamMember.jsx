import Link from "next/link";
import TeamMemberStyleWrapper from "./TeamMember.style";
import hoverShape from "assets/images/icon/hov_shape_L.svg";
import Pitbull from "assets/images/banner/pitbull_transparent.png";
import Image from 'next/image'
const TeamMember = ({ avatar, name, designation, socialLinks }) => {
  return (
    <TeamMemberStyleWrapper>
    
      <div className="bithu_team_card">
        <div className="team_member_img">
          <img src={avatar.src} alt="bithu nft team avatar" />
        </div>
        <h3>{name}</h3>
        <h4>{designation}</h4>
        <span className="hover_shape hov_shape1">
          <img src={hoverShape.src} alt="bithu nft team" />
        </span>
        <span className="hover_shape hov_shape2">
          <img src={hoverShape.src} alt="bithu nft team" />
        </span>

        {/* <div className="team_social_icon">
          <ul>
            {socialLinks?.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>
                  <a>{item.icon}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </TeamMemberStyleWrapper>
  );
};

export default TeamMember;
