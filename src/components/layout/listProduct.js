import React, { useState } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row, Col } from "reactstrap";
import type { FunctionComponent } from 'react';

type AuditQuestionnireSectionProps = {
    anh: object,
    vendorAuditId: object,
    survey: object,
    setSurvey: (values: object) => void,
    setSectionWillShowBack: (values: object) => void,
    methods: object,
    onSubmit: (values: object) => void,
    materials: object,
    viewMode: boolean,
  };
const ListProduct: FunctionComponent = (props: AuditQuestionnireSectionProps) => {
    const { anh } = props;
    const [listData, setListData] = useState([
        {
            id: '01',
            name: 'Samsung Galaxy',
            title: 'This is samsung',
            img: 'https://vnn-imgs-f.vgcloud.vn/2020/03/31/22/samsung-se-ra-mat-bao-nhieu-phien-ban-galaxy-note-20-1.jpg'
        },
        {
            id: '02',
            name: 'Samsung Galaxy',
            title: 'This is samsung'
        },
        {
            id: '03',
            name: 'Samsung Galaxy',
            title: 'This is samsung'
        },
        {
            id: '04',
            name: 'Samsung Galaxy',
            title: 'This is samsung'
        },
    ]);
    return (
        <Container className="themed-container" fluid={true}>
            <Row>
                {listData?.map((x) => {
                    return (
                        <Col md={3}>
                            <Card>
                                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{x.name}</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <img src={x.img}/>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
}
export default ListProduct;