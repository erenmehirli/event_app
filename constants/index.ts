import onboarding1 from "@/assets/images/onboarding.png";
import onboarding2 from "@/assets/images/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding3.png";
import googleIco from "@/assets/icons/google.png";
import lock from "@/assets/icons/lock.png";
import check1 from "@/assets/images/checked.png";


export const images = {
    onboarding1,
    onboarding2,
    onboarding3,
   check1,
};

export const icons = {
    googleIco,
    lock,
  };


export const onboarding = [
    {
        id: 1,
        title: "The perfect ride is just a tap away!",
        description:
            "Your journey begins with Ryde. Find your ideal ride effortlessly.",
        image: images.onboarding1,
    },
    {
        id: 2,
        title: "Best car in your hands with Ryde",
        description:
            "Discover the convenience of finding your perfect ride with Ryde",
        image: images.onboarding2,
    },
    {
        id: 3,
        title: "Your ride, your way. Let's go!",
        description:
            "Enter your destination, sit back, and let us take care of the rest.",
        image: images.onboarding3,
    },
];

export const data = {
    onboarding,
};