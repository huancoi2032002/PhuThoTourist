import DatePickerComponent from "../../components/Filter/FilterDate/DateFilter";
import Search from "../../components/Search/Search";
import Table from "../../components/Table/TableDocument/TableDocument";
import { GroupDown } from "../../assets";
import DocumentCard from "../../components/Cards/DocumentCard/DocumentCard";
import RectangleTitle from "../../components/Rectangles/RectangleTitle/RectangleTitle";
import Layout from "../../layouts/Layout";
import './Styles.scss';
import { useEffect, useState } from "react";
import { VueSetting } from "../../assets/iconpack";
import NewsDocumentCard from "../../components/Cards/NewsDocumentCard/NewsDocumentCard";
import { fetchDocument, fetchDocumentTable } from "../../firebase";
import FilterSettingMobile from "../../components/Filter/FilterSettingMobile/FilterSettingMobile";


const Document = () => {
    const [documentCard, setDocumentCard] = useState<any[]>([]);
    const [documentTable, setDocumentTable] = useState<any[]>([]);
    const [currentDocumentCard, setCurrentDocumentCard] = useState(4);
    const [isOpenFilterSetting, setIsOpenFilterSetting] = useState(false);
    const handleClickFilterSetting = () => {
        setIsOpenFilterSetting(prevState => !prevState);
    };
    const handleCloseFilterSetting = () => {
        setIsOpenFilterSetting(false); // Close the modal when the buttons are clicked
    };
    const handleScroll = () => {
        const element = document.getElementById('scrollTargetDocument');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        const loadDocuments = async () => {
            try {
                const documentCardData = await fetchDocument();
                setDocumentCard(documentCardData); //truyền dữ liệu slidesData và setPosts
            } catch (error) {
                console.error("Error fetching slides: ", error); // Nếu lỗi thì hiện thông báo
            }
        };

        loadDocuments();
    }, []);
    useEffect(() => {
        const loadDocumentTable = async () => {
            try {
                const documentTableData = await fetchDocumentTable();
                setDocumentTable(documentTableData); //truyền dữ liệu slidesData và setPosts
            } catch (error) {
                console.error("Error fetching slides: ", error); // Nếu lỗi thì hiện thông báo
            }
        };

        loadDocumentTable();
    }, []);
    useEffect(() => {
        const updateItemsCard = () => {
            if (window.innerWidth < 768) {
                setCurrentDocumentCard(3); // Nếu trang nhỏ hơn 768px thì hiển thị 3 DocumentCard
            } else {
                setCurrentDocumentCard(4); // Còn màn hình lớn hơn là 4
            }
        }
        updateItemsCard()
        window.addEventListener('resize', updateItemsCard)

        return () => window.removeEventListener('resize', updateItemsCard)

    }, [])
    return (
        <Layout>
            <div className='w-full flex flex-col items-center justify-center mt-32'>
                <RectangleTitle label="TÀI LIỆU" />
            </div>
            <div className="inline-flex flex-col items-start gap-[22px]">
                <div className="flex xl:h-[261px] xl:justify-center xl:items-start xl:gap-[22px] custom-frame-card-document">
                    {documentCard.slice(0, currentDocumentCard).map((doc, index) => (
                        <DocumentCard key={index} src={doc.src} title={doc.title} />
                    ))}
                </div>
                <div className="flex xl:h-[261px] xl:justify-center xl:items-start xl:gap-[22px] custom-frame-card-document">
                    {documentCard.slice(4, currentDocumentCard + 4).map((doc, index) => (
                        <DocumentCard key={index} src={doc.src} title={doc.title} />
                    ))}
                </div>

            </div>
            <div className="animate-move-down cursor-pointer xl:mb-[200px] mt-[10px] mb-[40px]" onClick={handleScroll}>
                <GroupDown />
            </div>
            <div className="flex items-center gap-2 rounded-xl p-3 custom-filterpackrowmobile lg:hidden">
                <Search width="276px" />
                <div className="custom-vuesetting" onClick={handleClickFilterSetting}>
                    <VueSetting />
                    
                </div>
            </div>
            <FilterSettingMobile isOpen={isOpenFilterSetting} onClose={handleCloseFilterSetting} />
            <div
                id="scrollTargetDocument"
                className="w-full h-full flex items-center justify-center"
            >
                <div className="xl:w-[1234px] xl:h-[807px] custom-document xl:px-[54px] xl:py-12 flex xl:flex-col xl:gap-[14px] rounded-[20px]">
                    <div className="flex justify-between items-center">
                        <div className="inline-flex flex-col items-start gap-2">
                            <label htmlFor="" className="text-[#0054A6] font-roboto text-lg font-semibold">Ngày tạo</label>
                            <DatePickerComponent />
                        </div>
                        <div className="inline-flex flex-col items-start gap-2">
                            <label htmlFor="" className="text-[#0054A6] font-roboto text-lg font-semibold">Từ khóa</label>
                            <Search width="314px" />
                        </div>
                    </div>
                    <div className="flex xl:w-[1126px] items-start rounded-lg">
                        <Table 
                            data={documentTable} 
                        />
                    </div>

                </div>

                <div className="custom-newsdocument-card lg:hidden">
                    <NewsDocumentCard data={documentTable} />
                </div>

            </div>

        </Layout>
    )
}

export default Document