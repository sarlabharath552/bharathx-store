import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

function VoiceSearch() {
  const {
    transcript,
    listening
  } = useSpeechRecognition();

  return (
    <section className="py-10 px-6">

      <div className="max-w-xl mx-auto text-center">

        <button
          onClick={() =>
            SpeechRecognition.startListening()
          }
          className="bg-black text-white px-8 py-4 rounded-full"
        >
          🎤 Voice Search
        </button>

        <p className="mt-4 text-gray-500">
          {listening
            ? "Listening..."
            : transcript}
        </p>

      </div>

    </section>
  );
}

export default VoiceSearch;