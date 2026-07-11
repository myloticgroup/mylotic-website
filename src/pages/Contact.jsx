import ContactForm from "../components/Contact/ContactForm/ContactForm";
import FAQ from "../components/Contact/FAQ/FAQ";
import Hero from "../components/Contact/Hero/Hero";
import QuickContact from "../components/Contact/QuickContact/QuickContact";




export default function Contact() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <QuickContact/>
      <ContactForm/>
      <FAQ/>
    </main>
  );
}