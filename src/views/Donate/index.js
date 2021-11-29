import React, { useState } from "react";
import { DonateAmountInput } from "../../components/DonateAmountInput";
import { SummaryCard } from "../../components/SummaryCard";
import { VoluntaryInput } from "../../components/VoluntaryInput";
import "./styles.scss";

export const Donate = () => {
  const campaignDetails = {
    title: "Ayuda a Walter White en su lucha contra el cáncer del pulmón",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.",
    img: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tags: "Médicas, enfermedades y salud",
    donations: 8450,
    goal: 9200,
    name: " Walter White",
    campaignReason: "su lucha contra el cáncer del pulmón",
    commentsDb: [
      {
        name: "Fabrizzio DBC",
        amount: "1550.00",
        comment: "Espero te sirva de mucho, cuídate!",
      },
      {
        name: "Alberto C.",
        amount: "700.00",
        comment: "Espero te sirva de mucho, cuídate!",
      },
      {
        name: "Julieta Rabadilla",
        amount: "3500.00",
        comment: "Espero te sirva de mucho, cuídate!",
      },
      {
        amount: "35.00",
      },
    ],
  };
  const { name, campaignReason } = campaignDetails;
  const [voluntaryInput, setVoluntaryInput] = useState("15");
  const [donateAmount, setDonateAmount] = useState("");
  return (
    <main className="main">
      <div className="donate">
        <div className="donate__text">
          <p className="donate__title">
            Estás apoyando a <span>{name}</span> con {campaignReason}
          </p>
          <p className="donate__subtitle">
            Tu donativo tendrá como beneficiario/a <span>{name}</span>
          </p>
        </div>
        <DonateAmountInput
          donateAmount={donateAmount}
          setDonateAmount={setDonateAmount}
        />
        <VoluntaryInput
          voluntaryInput={voluntaryInput}
          setVoluntaryInput={setVoluntaryInput}
        />
        <button className="btn btn-primary checkout__show-button">
          Continuar
        </button>
        <div className="warranty">
          <i className="fas fa-check-circle fa-2x warranty__icon"></i>
          <div className="warranty__text">
            <p className="warranty__title">Garantía Donapp</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              eveniet earum, omnis ullam in architecto ex odit sunt hic,
            </p>
            <a href="www.google.com">Más información</a>
          </div>
        </div>
      </div>
      <SummaryCard
        voluntaryInput={voluntaryInput}
        donateAmount={donateAmount}
      />
    </main>
  );
};
