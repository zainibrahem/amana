import React, { useCallback } from 'react';
import {Row,Col} from './Groups.style';
import Left from 'assets/images/newimages/big-banner_1.5.png';
import Left1 from 'assets/images/newimages/big-banner_2.5.png';
import Left2 from 'assets/images/newimages/big-banner_3.5.png';
import Left3 from 'assets/images/newimages/big-banner_4.5.png';
import Left4 from 'assets/images/newimages/big-banner_5.5.png';
interface Props {}

export const Groups: React.FC<Props> = () => {
  return (
  <>
    <Row>
        <Col>
            <div className="background" style={{background:`url(${Left})`}}></div>
        </Col>
        <Col>
            <div className="multi">
                <div className="backgrounds" style={{background:`url(${Left1})`,backgroundPosition:"center left"}}></div>
                <div className="backgrounds" style={{background:`url(${Left2})`}}></div>
                <div className="backgrounds" style={{background:`url(${Left3})`}}></div>
                <div className="backgrounds" style={{background:`url(${Left4})`}}></div>
            </div>
        </Col>
    </Row>
  </>
  );
}