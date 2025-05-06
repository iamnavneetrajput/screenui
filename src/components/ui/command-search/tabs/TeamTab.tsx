import React from 'react';
import { TeamMember, StatusType } from '../types';

interface TeamTabProps {
  members: TeamMember[];
  onSelect: (name: string) => void;
}

const TeamTab: React.FC<TeamTabProps> = ({ members, onSelect }) => {
  const renderStatusBadge = (status: StatusType) => {
    switch (status) {
      case 'online':
        return <span className="text-xs text-green-400">Online</span>;
      case 'away':
        return <span className="text-xs px-2 py-0.5 rounded bg-gray-600 text-gray-300">Away</span>;
      case 'in-meeting':
        return <span className="text-xs px-2 py-0.5 rounded bg-pink-600 text-white">In Meeting</span>;
      default:
        return null;
    }
  };

  return (
    <div className="p-2">
      <div className="text-xs text-gray-500 uppercase px-2 py-1">Team Members</div>
      {members.length > 0 ? (
        <ul>
          {members.map((member) => (
            <li 
              key={member.id}
              className="flex items-center px-2 py-2 my-1 rounded hover:bg-gray-800 cursor-pointer"
              onClick={() => onSelect(member.name)}
            >
              <div className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center text-xs font-medium mr-3">
                {member.initials}
              </div>
              <span className="text-gray-200">{member.name}</span>
              <span className="ml-auto">
                {renderStatusBadge(member.status)}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 p-2">No team members found</p>
      )}
    </div>
  );
};

export default TeamTab;