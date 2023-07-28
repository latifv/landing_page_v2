import {
  HyperFlare,
  HyperNova,
  HyperSonic,
  HyperVolt,
  HyperVoter,
  StepFirst,
  StepSecond,
  StepThird,
  StepFourth,
} from "../../assets";
export const daoContent = {
  topContent: {
    title:
      "**More than** just a **decision maker!** **Contribute** directly to **the development of HyperGPT!**",
    desc: "Take your place in the world's most comprehensive AI DAO! What you need to do is very simple, just follow the steps.",
  },
  stepContent: [
    {
      id: 1,
      title: (
        <div>
          Vote for the future of
          <br />
          HyperGPT!
        </div>
      ),
      desc: "Have a say in the future of HyperGPT by holding the HPGT token. Remember, your decision will be the key to success!",
    },
    {
      id: 2,
      title: (
        <div>
          EARN $HGPT BY ADDING
          <br />
          AND VALIDING AI APPs!
        </div>
      ),
      desc: "By holding 100+ HPGT tokens, gain the right to add and validate products in the HyperStore. So earn on monthly rewards!",
    },
    {
      id: 3,
      title: (
        <div>
          earn $HGPT by commentıng and
          <br />
          comment validating!
        </div>
      ),
      desc: "By holding 100+ HPGT tokens, you get the right to comment on products and validate comments on the HyperStore. So earn more from monthly rewards!",
    },
    {
      id: 4,
      title: (
        <div>
          Take your place in the DAO
          <br />
          channel on Discord!
        </div>
      ),
      desc: "If you have completed all the requirements to become a DAO member, you can take your place in  Discord DAO channel and be informed about all the developments.",
    },
  ],
  bottomContent: {
    lightTitle: "Make your life easier with HyperStore!",
    title: "**Simplify Your AI Integration** Process with HyperStore",
    desc: "HyperGPT platform is designed to be user-friendly and easily accessible, allowing you to quickly and easily find the AI applications that are best suited for your needs. With its powerful search capabilities, you can filter results by price, functionality and popularity, making it easy to find the perfect solution for your  project. \n\n In addition to offering access to a wide range of AI applications, HyperGPT platform also provides a range of value-added services. HyperGPT platform allows you to easily integrate iframe codes and AI solutions into your projects, making it easy to get up and running quickly.",
  },
  infoWrapper: {
    firstTitle: "HOW TO BECOME A DAO MEMBER?",
    firstDesc:
      "To become a HyperGPT DAO Member, you must hold $HGPT tokens in your Metamask account and cast at least 1 vote on Snapshot Space. The number of tokens you will hold will be decisive in the role you will take.",
    secondTitle: "Let's get to know the DAO Roles",
    secondDesc:
      "Get DAO roles and earn $HGPT by contributing to the HyperStore with your votes for decisions! Because now you're in control!",
  },
};

export const becomeDatas = [
  {
    id: StepFirst,
    title: "HOLD $HGPT TOKEN",
    desc: "HyperGPT DAO Member olabilmek için Metamask hesabınızda $HGPT token tutmanız gerekmektedir. Hold edeceğiniz token adedi alacağınız rolde belirleyici olacaktır.",
    btnText: "Buy $HGPT",
  },
  {
    id: StepSecond,
    title: "VOTE ON SNAPSHOT",
    desc: "Now that you are a DAO member, you can vote in Snapshot. Remember, with the first vote you give in Snapshot, you will complete the verification process in Guild.xyz and you will be able to get the role specific to your tier.",
    btnText: "Vote on Snapshot",
  },
  {
    id: StepThird,
    title: "VERIFY ON GUILD.XYZ AND CLAIM YOUR ROLE",
    desc: "Now that you are a DAO member, you can vote in Snapshot. Remember, with the first vote you give in Snapshot, you will complete the verification process in Guild.xyz and you will be able to get the role specific to your tier.",
    btnText: "Verify on Guild",
  },
  {
    id: StepFourth,
    title: "CONNECT YOUR DISCORD TO HYPERSTORE",
    desc: "Visit HyperStore and link your Discord account. So you can add, validate, and contribute comments on the HyperStore. You're in control now, what are you waiting for!",
    btnText: "Visit HyperStore",
  },
];

export const roleDatas = [
  {
    id: 1,
    title: "HyperFlare",
    listDesc: [
      "Between 100-500 HPGT tokens should be held",
      "Token weighted voting on Snapshot",
      "10x App Addding + 25x App Validation",
      "Comment Adding + 100x Comment Validation",
    ],
    icon: HyperFlare,
  },
  {
    id: 2,
    title: "HyperVolt",
    listDesc: [
      "Between 501-5000 HPGT tokens should be held",
      "Token weighted voting on Snapshot",
      "25x App Addding + 50x App Validation",
      "100x Comment Adding + 250x Comment Validation",
    ],
    icon: HyperVolt,
  },
  {
    id: 3,
    title: "HyperNova",
    listDesc: [
      "Between 5001-25000 HPGT tokens should be held",
      "Token weighted voting on Snapshot",
      "100x App Addding + 250x App Validation",
      "500x Comment Adding + 1000x Comment Validation",
    ],
    icon: HyperNova,
  },
  {
    id: 4,
    title: "HyperSonic",
    listDesc: [
      "Between 25000+ HPGT tokens should be held",
      "Token weighted voting on Snapshot",
      "250x App Addding + 500x App Validation",
      "1000x Comment Adding + 2500x Comment Validation",
    ],
    icon: HyperSonic,
  },
  {
    id: 5,
    title: "HyperVoter",
    listDesc: [
      "Between 1-99 HPGT tokens should be held",
      "Token weighted voting on Snapshot",
    ],
    icon: HyperVoter,
  },
];
