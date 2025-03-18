export default {
    id: "complicated-arcticle",
    title: "Article with Components",
    description: "This is a more complicated article.",
    date: "18.03.2025",
    thumbnail: '/images/ld-measures.png',
    text: "This text is rendered first.",
    elements: [
        { type: "paragraph", propList: { text: "There is some text here" }},
        { type: "image", propList: { src: '/images/ld-measures.png' }},
        { type: "paragraph", propList: { text: "This is a second paragraph" }},
    ],
};
  