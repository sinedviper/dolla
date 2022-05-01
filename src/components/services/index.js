import React from "react";
import Icon1 from "../../images/svg-1.png";
import Icon2 from "../../images/svg-3.png";
import Icon3 from "../../images/svg-5.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesP,
  ServicesCard,
  ServicesIcon,
} from "./servicesStyle";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>
              We help reduce your fess and increase your overall revenue.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Virtual offices</ServicesH2>
            <ServicesP>
              You can access our platform online anywhere in the world.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Premium benefits</ServicesH2>
            <ServicesP>
              Unlock our special membership card that returns 5% cash back.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
