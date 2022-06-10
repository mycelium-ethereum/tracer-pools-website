import SEO from "@components/Shared/SEO"
import { careersSeoDesc } from "@components/Shared/presets"
import { Banner } from "@components/Careers/Banner"
import { CareerList } from "@components/Careers/CareerList/CareerList"

const CareersPage: React.FC<{}> = () => {
    return (
        <>
            <SEO title="Careers" description={careersSeoDesc} />
            <Banner />
            <CareerList />
        </>
    )
}

export default CareersPage
