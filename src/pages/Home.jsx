import { motion } from "motion/react";
import CardBlog from "../ui/components/CardBlog";
import CreatePost from "../ui/components/CreatePost";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";

export default function Home() {
  const [createMode, setCreateMode] = useState(false);
  const { isSignedIn, user } = useUser();
  const { buttonActive, setButtonActive } = useState(false);

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4 sm:px-0 text-center overflow-hidden"
        id="home"
      >
        <div>
          {isSignedIn ? (
            <button
              className="bg-blue-800 p-2 text-white rounded-sm cursor-pointer hover:bg-blue-900 justify-self-end"
              onClick={() => setCreateMode(true)}
            >
              Create a post
            </button>
          ) : (
            <p>Sign in to create a post</p>
          )}
          {createMode && <CreatePost />}
        </div>
        <div className="flex space-x-7">
          <CardBlog
            title={
              "Como a criação de captive portals pode te ajudar em um futuro proximo."
            }
            thumbnail={
              "https://plus.unsplash.com/premium_photo-1682145181120-73cfdfc8a36d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV0d29ya3xlbnwwfDB8MHx8fDA%3D"
            }
            author={"Oseias Cruz"}
          />
          <CardBlog
            title={
              "Soluções técnologicas, usando de códigos para otimizar processos de sua empresa."
            }
            thumbnail={
              "https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV0d29ya3N8ZW58MHx8MHx8fDA%3D"
            }
            author={"Marlon Oliveira"}
          />
          <CardBlog
            title={
              "Utilizando de nossos sistemas de virtualização diminuindo a responsabilidade técnologia em sua empressa."
            }
            thumbnail={
              "https://images.unsplash.com/photo-1594915440248-1e419eba6611?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV0d29ya3N8ZW58MHx8MHx8fDA%3D"
            }
            author={"Marlon Oliveira"}
          />
        </div>
      </motion.div>
    </>
  );
}
