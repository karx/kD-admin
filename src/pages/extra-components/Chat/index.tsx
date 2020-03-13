import { Row, Col, Card, Chat, CardBody, ChatForm, ChatMessages, MessageProps, AttachedFile } from 'oah-ui';
import React, { useState } from 'react';
import SEO from '../../../components/SEO';
import defaultMessages from '../../../components/messages';

export default function ChatPage() {
  const [messages, setMessages] = useState<MessageProps[]>(defaultMessages);

  const onSendHandle = (v: { message: string; files: AttachedFile[] }) => {
    const files = !v.files
      ? []
      : v.files.map(file => {
          return {
            url: file.src as string,
            type: file.type,
            icon: 'document',
          };
        });
    const newMessage: MessageProps = {
      message: v.message,
      date: new Date().toLocaleTimeString(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files,
      sender: 'Ahmed Elywa',
      avatar: 'https://i.gifer.com/no.gif',
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <>
      <SEO title="Chat" keywords={['kartaDharam', 'akriya', 'connected devices', 'iot', 'dashboard', 'react']} />
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }} style={{ marginBottom: '1rem' }}>
          <Chat title="Akriya Technology">
            <ChatMessages messages={messages} mapKey="API_KEY" />
            <ChatForm onSend={v => onSendHandle(v)} dropFiles filesIcon="document" />
          </Chat>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card>
            <header>Main features</header>
            <CardBody>
              <ul>
                <li>different message types support (text, image, file, file group, map, etc)</li>
                <li>drag &amp; drop for images and files with preview</li>
                <li>different UI styles</li>
              </ul>
              <Row />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}