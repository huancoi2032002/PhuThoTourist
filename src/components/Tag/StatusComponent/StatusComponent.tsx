import React from "react";
import './Styles.scss';
interface IStatusComponentProps {
    status: 'Đang tuyển' | 'Đã hết hạn';
    size: 1 | 2 | 3 | 4
}

const StatusComponent: React.FC<IStatusComponentProps> = ({ status, size }) => {
    let selection;
    switch (size) {
        case 1:
            selection = '8px 12px';
            break;
        case 2:
            selection = '16px 24px';
            break;
        case 3:
            selection = '24px 36px';
            break;
        case 4:
            selection = '32px 48px';
            break;
        default:
            selection = '8px 12px'; // Giá trị mặc định nếu size không hợp lệ
            break;

    }
    const statusStyles = status === 'Đang tuyển'
        ? {
            backgroundColor: 'var(--green-green-50, #E6F7E6)',
            color: 'var(--green-green-500, #03A600)',
        }
        : {
            backgroundColor: '#F7E6E6',
            color: '#FF3939',
        };

    return (
        <div className="custom-status" style={{ backgroundColor: statusStyles.backgroundColor, padding: selection }}>
            <span className="font-roboto text-sm font-semibold" style={{ color: statusStyles.color }}>
                {status}
            </span>
        </div>
    );
};

export default StatusComponent