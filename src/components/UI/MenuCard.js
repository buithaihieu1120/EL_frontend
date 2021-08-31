import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './UI.css'
MenuCard.propTypes = {

};

function MenuCard(props) {
    const [list, setList] = useState([
        {
            id: 1,
            image: "image.png",
            title: "Bảng phiên âm (IPA)",
            content: "Luyện nghe, phát âm chuẩn với 44 âm trong bảng phiên âm quốc tế IPA",
        },
        {
            id: 2,
            image: "image.png",
            title: "1000+ câu giao tiếp",
            content: "Luyện nghe, nói câu tiếng Anh giao tiếp hằng ngày cùng Dyno",
        },
        {
            id: 3,
            image: "image.png",
            title: "Từ vựng với Flashcard",
            content: "Flashcard phương pháp học từ vựng nổi tiếng. Nay hoàn toàn miễn phí trên Dynonary",
        },
        {
            id: 4,
            image: "image.png",
            title: "Từ điển trong Dynonary",
            content: "Danh sách từ vựng được phân loại theo cấp độ, loại từ,...",
        },
        {
            id: 5,
            image: "image.png",
            title: "Từ vựng TOEIC",
            content: "Các từ vựng thường gặp trong đề thi Toeic",
        },
        {
            id: 6,
            image: "image.png",
            title: "Từ vựng yêu thích của bạn",
            content: "Danh sách những từ vựng yêu thích mà bạn đã lưu",
        },
        {
            id: 7,
            image: "image.png",
            title: "Động từ bất quy tắc",
            content: "Tất cả những động từ bất quy tắc trong tiếng Anh",
        },
        {
            id: 8,
            image: "image.png",
            title: "Ngữ pháp",
            content: "Danh sách tổng hợp những cấu trúc trong tiếng Anh",
        },
    ])
    return (
            <div className="grid wide menu">
                <div className="col l-10 l-o-1">
                <div className="row">
                    {list.map((item,index) =>
                        <div className="col l-4 m-6 c-12" key={index}>
                            <div className="row menu__item">
                                <div className="col l-2 m-12 c-2">
                                    <img alt='logo' className='menu__item-image' src={item.image} />
                                </div>
                                <div className="col l-10 m-12 c-10">
                                    <div className="menu__item-text">
                                        <h1 className='menu__item-title'>{item.title}</h1>
                                        <p className='menu__item-content'>{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MenuCard;