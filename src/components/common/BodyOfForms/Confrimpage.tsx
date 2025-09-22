const Confrimpage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6">
      <img src="/public/images/icon-thank-you.svg" alt="thank-icon" />
      <div className="space-y-3">
      <h3 className="text-2xl text-Blue-950 font-[700]">Thank you!</h3>
      <p className="text-Grey-500 font-[400]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. if you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
      </div>
    </div>
  );
};

export default Confrimpage;
