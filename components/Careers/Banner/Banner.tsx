import Container from "@components/Shared/Container"
import PageHeader from "@components/Shared/PageHeader"
import Section from "@components/Shared/Section"

export const Banner: React.FC<{}> = () => {
    return (
        <Section className="bg-white">
            <Container className="xs:static">
                <PageHeader
                    title="Job Listings"
                    subheading="View open roles for the Core Tracer team."
                />
            </Container>
        </Section>
    )
}
