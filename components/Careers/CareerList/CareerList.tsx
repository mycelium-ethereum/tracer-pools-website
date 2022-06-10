import Section from "@components/Shared/Section"
import Container from "@components/Shared/Container"
import { BuildWithUsBanner } from "@components/Careers/BuildWithUsBanner"
import { CareersTable } from "@components/Careers/CareersTable"

export const CareerList: React.FC<{}> = () => {
    return (
        <Section className="bg-white">
            <Container>
                <CareersTable />
                <BuildWithUsBanner />
            </Container>
        </Section>
    )
}
