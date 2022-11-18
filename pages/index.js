import { useEffect, useState } from "react";

import { FaSnowflake, FaWalking, FaTree, FaTint, FaSun } from "react-icons/fa";

export default function Home() {
  const [isClient, setClient] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!isClient) return null;

  const data = [
    {
      img: "https://64.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
      icon: <FaWalking />,
      main: "Blonkisoaz",
      sub: "Omuke trughte a otufta",
    },
    {
      img: "https://64.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
      icon: <FaSnowflake />,
      main: "Oretemauw",
      sub: "Omuke trughte a otufta",
    },
    {
      img: "https://64.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
      icon: <FaTree />,
      main: "Iteresuselle",
      sub: "Omuke trughte a otufta",
    },
    {
      img: "https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg",
      icon: <FaTint />,
      main: "Idiefe",
      sub: "Omuke trughte a otufta",
    },
    {
      img: "https://64.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg",
      icon: <FaSun />,
      main: "Inatethi",
      sub: "Omuke trughte a otufta",
    },
  ];

  return (
    <body>
      <div class="options">
        {data.map((item, i) => (
          <>
            <div
              key={i}
              onClick={() => setSelectedIndex(i)}
              class={`option ${i === selectedIndex && "active"}`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div class="shadow"></div>
              <div class="label">
                <div class="icon">
                  <i class="fas fa-snowflake">{item.icon}</i>
                </div>
                <div class="info">
                  <div class="main">{item.main}</div>
                  <div class="sub">{item.sub}</div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </body>
  );
}
