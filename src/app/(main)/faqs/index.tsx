import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

interface FAQItemProps {
  question: string;
  answer: string;
}

interface FAQData {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <View style={styles.faqItem}>
      <TouchableOpacity
        onPress={() => setIsExpanded(!isExpanded)}
        style={styles.questionContainer}
      >
        <Text style={styles.questionText}>{question}</Text>
        <Text style={styles.expandIcon}>{isExpanded ? "▲" : "▼"}</Text>
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      )}
    </View>
  );
};
const FAQ = () => {
  const faqs = [
    {
      question: "Sample Question 1",
      answer:
        "Employers often ask this question to identify why you might be more qualified than other candidates they're interviewing. To help you prepare an answer to this question, we asked Indeed's resident career coach to offer some guidance.",
    },
    {
      question: "Sample Question 2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Sample Question 3",
      answer:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Sample Question 4",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Sample Question 5",
      answer:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FAQ'S</Text>
      </View>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#4CAF50",
    flex: 1,
  },
  expandIcon: {
    fontSize: 16,
    color: "#4CAF50",
  },
  answerContainer: {
    padding: 15,
    backgroundColor: "#f9f9f9",
  },
  answerText: {
    fontSize: 14,
    color: "#333",
  },
});

export default FAQ;
