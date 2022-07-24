# NLP Q & A module using React and Tensorflow JS
A Natural Language Processing module in react that can extract answers from a given paragraph using the BERT model.
# Aim
To create a module in react that can extract answers from a given paragraph.
# Introduction
This module will use the BERT (Bidirectional Encoder Representations from Transformers) model to extract answeres from a given paragraph. This module will accept a question and return a statement from the given paragraph that best answers the question, it will also list down other possible answers that it could find from the paragraph
<br><br>

# Working
BERT (Bidirectional Encoder Representations from Transformers) is based on a deep learning model called Transformers. As opposed to processing each word in a sentence sequentially, the BERT model processes the entire sentence using transformers at once allowing it to learn the context of a given word. In language processing the meaning of a word in a given sentence dependes on the order in which the words are processed, models such as RNN's processed these words sequentially and hence would lose the context or meaning of a word once it completed processing the entire snetence. Transformers overcome this problem by processing the words in a sentence parallelly.

Transformer use the following mechanisms to learn the context of a word in a given sentence or paragraph
1. Positional encoding
2. Attention
3. Self-attention

<ins><b>Positional encoding</b></ins> attaches a number or index to each word in a sentence accorinding to the order in which they appear before the sentence is processed by the neural network. The transformer learns how to interpret these positional encoding when being trained on text data.

<ins><b>Attention</b></ins> allows a language model to get the context of a given word by parallelly processing every word in the senctence to co-relate the word with the sentence. It learns the grammer rules while training the model on a dataset, and learns how to interpret the indexes or positional encodings in the new sentence.

<ins><b>Self-Attention</b></ins> The attention mechanism of a transformer is usefull when performing a task such as translation, attention will allow the model to co-relate words from one language to words of another language and translate while maintaning the grammer rules of the language in which the text is to be translated in. However in the case of a question and answer module, we are more interested in learning the meaning and patterns of words in a sentence, this is achieved using the self attention mechanism which can distiguish beetween ambigous words in a paragraph
for example:
  if we have two sentences
  1. "Server, can I please get the check"
  2. "Looks like the server is down today"
  
The self attention mechanism will co-relate the word server with check and be able to dsitiguish between a human server and a machine. In the second sentence, it will co-relate the word server with down and determine that this server is a machine.
For better accuracy the model will need to be trained on a dataset of a large ammount of data for better co-relation.

# Technologies Used<br>
**React** - open-source front-end JavaScript library.<br>
**Tensorflow JS** - library for machine learning in JavaScript<br>
<br><br>

# References
Transformers Explained - https://daleonai.com/transformers-explained


# Screenshots 
A few screenshots of the application.
![](https://raw.githubusercontent.com/RyanDC1/React-QnA-NLP-Module/main/src/Assets/Images/Demo-1.png?token=GHSAT0AAAAAABW42WX64KOCUC7GHKO5PSC6YW5KGWQ)
