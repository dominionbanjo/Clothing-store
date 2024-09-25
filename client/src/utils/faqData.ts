interface Questions {
  question: string;
  answer: string;
}
interface faqData {
  category: string;
  questions: Questions[];
}

const faqData: faqData[] = [
  {
    category: "all",
    questions: [
      {
        question: "How can I place an order on StyleLoom?",
        answer:
          "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
      },
      {
        question: "Can I modify or cancel my order after placing it?",
        answer:
          "Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your package in real-time on our website.",
      },
      {
        question: "Do you offer exchanges for products?",
        answer:
          "At this time, we don't offer direct product exchanges. If you'd like a different item, please initiate a return and place a new order.",
      },
      {
        question: "What is your return policy?",
        answer:
          "You can return items within 30 days of receiving your order, provided they are in their original condition and packaging.",
      },
    ],
  },
  {
    category: "ordering",
    questions: [
      {
        question: "How can I place an order on StyleLoom?",
        answer:
          "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
      },
      {
        question: "Can I modify or cancel my order after placing it?",
        answer:
          "Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.",
      },
      {
        question: "Is there a minimum order value?",
        answer:
          "No, we do not have a minimum order value. You can place an order of any amount.",
      },
      {
        question: "Can I order without creating an account?",
        answer:
          "Yes, you can place an order as a guest without creating an account. However, we recommend creating an account for easier tracking and future orders.",
      },
      {
        question: "Do you offer gift wrapping?",
        answer:
          "Yes, we offer gift wrapping for select products. You can choose the option at checkout.",
      },
    ],
  },
  {
    category: "shipping",
    questions: [
      {
        question: "How can I track my order?",
        answer:
          "Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your package in real-time on our website.",
      },
      {
        question: "What are your shipping options?",
        answer:
          "We offer multiple shipping options including standard, express, and next-day delivery. Choose the option that suits your needs at checkout.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship internationally. Shipping costs and delivery times will vary based on your location.",
      },
      {
        question: "What are the shipping charges?",
        answer:
          "Shipping charges depend on the weight and destination of your order. The final cost will be displayed at checkout.",
      },
      {
        question: "How long will it take for my order to arrive?",
        answer:
          "Delivery times vary based on your location and shipping option chosen. Standard shipping typically takes 5-7 business days.",
      },
      {
        question: "Can I change the shipping address after placing an order?",
        answer:
          "Once the order is confirmed, changing the shipping address might not be possible. Please contact support immediately for assistance.",
      },
    ],
  },
  {
    category: "returns",
    questions: [
      {
        question: "How do I initiate a return?",
        answer:
          "Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process.",
      },
      {
        question: "Do you offer exchanges for products?",
        answer:
          "At this time, we don't offer direct product exchanges. If you'd like a different item, please initiate a return and place a new order.",
      },
      {
        question: "What is your return policy?",
        answer:
          "You can return items within 30 days of receiving your order, provided they are in their original condition and packaging.",
      },
      {
        question: "How long does the return process take?",
        answer:
          "The return process typically takes 7-10 business days once the item is received at our warehouse.",
      },
      {
        question: "Will I get a refund for the shipping charges?",
        answer:
          "Shipping charges are non-refundable, unless the return is due to a mistake on our part.",
      },
      {
        question: "Can I return a sale item?",
        answer:
          "Sale items may not be eligible for returns. Please review our return policy for specific conditions.",
      },
    ],
  },
  {
    category: "support",
    questions: [
      {
        question: "How can I contact customer support?",
        answer:
          "You can reach out to our support team via email at support@styleloom.com or call us at our helpline number for assistance.",
      },
      {
        question: "What should I do if I encounter an issue with my order?",
        answer:
          "If there's an issue with your order, contact our support team with your order number and details, and we'll help resolve the issue.",
      },
      {
        question: "Do you offer live chat support?",
        answer:
          "Yes, we offer live chat support during business hours. Visit our website and click on the chat icon to get immediate assistance.",
      },
      {
        question: "What are your customer service hours?",
        answer:
          "Our customer service is available Monday through Friday, from 9 AM to 6 PM. For urgent matters, please email us.",
      },
      {
        question: "How can I escalate a complaint?",
        answer:
          "If you're not satisfied with the support provided, you can escalate the issue by requesting a supervisor or contacting us via our complaint form.",
      },
      {
        question: "Do you have a physical store?",
        answer:
          "Currently, we operate online only. You can browse and shop all our products through our website.",
      },
    ],
  },
];

export function getQandAByCategory(category: string) {
  const categoryData = faqData.find((item) => item.category === category);

  return categoryData
    ? categoryData.questions.map((q) => ({
        question: q.question,
        answer: q.answer,
      }))
    : [];
}
