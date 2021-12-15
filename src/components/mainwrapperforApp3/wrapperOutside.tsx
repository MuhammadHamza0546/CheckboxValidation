import react from "react";
import "./wrapperOutside.scss";
import clock from "../../UI/clock.png";
import twoMen from "../../UI/two-men.png";
import xMark from "../../UI/x-mark.png";
import OverviewTeamworkPenaltiesWrapper from "../OverviewTeamworkPenaltiesWrapper/OverviewTeamworkPenaltiesWrapper";
const wrapperOutside = () => {
  return (
    <div className="wrapper-outside">
      <OverviewTeamworkPenaltiesWrapper
        picPath={clock}
        text1="Overview"
        text2="t is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution ."
        text3="It is a long established fact that a reader will be distracted by
            the readable content."
      />

      <OverviewTeamworkPenaltiesWrapper
        picPath={twoMen}
        text1="Teamwork"
        text2="It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal
        distribution ."
        text3="It is a long established fact that a reader will be distracted by
        the readable content."
      />

      <OverviewTeamworkPenaltiesWrapper
        picPath={xMark}
        text1="Penalties"
        text2=" It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point
        of using Lorem Ipsum is that it has a more-or-less normal
        distribution ."
        text3="It is a long established fact that a reader will be distracted by
        the readable content."
      />
    </div>
  );
};

export default wrapperOutside;
