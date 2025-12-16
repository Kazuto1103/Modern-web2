import React from 'react';
import Button from '../button/Button';
import './UserCard.css';

const UserCard = ({
    user,
    onEdit,
    onDelete
}) => {
    const {
        id,
        name,
        email,
        role = 'User',
        avatar,
        isActive = true
    } = user;

    return (
        <div className={`user-card ${!isActive ? 'inactive' : ''}`}>
            <div className="user-avatar">
                <img
                    src={avatar || '/default-avatar.png'}
                    alt={`${name} avatar`}
                />
                {isActive && <span className="status-indicator"></span>}
            </div>

            <div className="user-info">
                <h3 className="user-name">{name}</h3>
                <p className="user-email">{email}</p>
                <span className={`user-role role-${role.toLowerCase()}`}>
                    {role}
                </span>
            </div>

            <div className="user-actions">
                <Button
                    variant="secondary"
                    size="small"
                    onClick={() => onEdit(id)}
                >
                    Edit
                </Button>
                <Button
                    variant="secondary"
                    size="small"
                    onClick={() => onDelete(id)}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default UserCard;