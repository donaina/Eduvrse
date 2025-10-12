import React, { useState } from 'react';
import { Search, Plus, Send, X } from 'lucide-react';
import { IoIosSearch } from 'react-icons/io';

interface ChatMessage {
  id: number;
  message: string;
  sender: 'me' | 'them';
}

interface Chat {
  id: number;
  name: string;
  messages: ChatMessage[];
}

interface MessageItem {
  id: number;
  sender: string;
  type: string;
  message: string;
  date: string;
  notification?: string;
  chat?: Chat[];
}

const Message: React.FC = () => {
  const messages: MessageItem[] = [
    {
      id: 1,
      sender: 'Dr Sarah Wilson',
      type: 'Instructor',
      message: 'Great work on your last assessment. I see you have improved!',
      date: '12/7/25',
      notification: '2',
      chat: [
        {
          id: 1,
          name: 'ThatParty Boy',
          messages: [
            { id: 1, message: 'Fuji Vibe Mehn - Asake dey hot 🤣😂', sender: 'them' },
            { id: 2, message: 'Thanks! Really appreciate it', sender: 'me' },
            { id: 3, message: 'Keep up the good work!', sender: 'them' }
          ]
        }
      ]
    },
    {
      id: 2,
      sender: 'Prof Michael Brown',
      type: 'Instructor',
      message: 'Please submit your assignment by Friday',
      date: '12/6/25',
      // notification: '2'
    },
    {
      id: 3,
      sender: 'Dr Emily Chen',
      type: 'Advisor',
      message: 'Would you like to schedule a meeting this week?',
      date: '12/5/25'
    },
    {
      id: 4,
      sender: 'John Smith',
      type: 'Student',
      message: 'Hey! Can we work on the group project together?',
      date: '12/4/25',
      // notification: '1'
    }
  ];

  const [selectedMessage, setSelectedMessage] = useState<MessageItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [newMessage, setNewMessage] = useState<string>('');

  const filteredMessages = messages.filter((msg: MessageItem) =>
    msg.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    msg.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .filter((word: string) => word.length > 1 && word.toLowerCase() !== "dr")
      .map((word: string) => word[0])
      .join("")
      .toUpperCase();
  };

  const handleSendMessage = (): void => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className='px-6 bg-gray-50 '>
      {/* Header */}
      <div className='mb-6 flex justify-between items-center'>
        <div>
          <h1 className='font-bold text-2xl text-gray-800'>Messages</h1>
        <p className='text-xs text-gray-500 mt-1'>Your learning communications and updates</p>
        </div>
        <div className='w-[40%] bg-[#F7F6F6] rounded  lg:flex justify-between items-center px-2 my-3 outline outline-[#F7F6F6] shadow-[-4px_0_6px_rgba(0,0,0,0.2) shadow-[0_-4px_6px_rgba(0,0,0,0.2)] hidden'>
            <input type="text" className='w-[90%] outline-none h-full bg-[#F7F6F6] px-4' placeholder='search' value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)} />
            <button className='p-2 bg-red'><IoIosSearch size={25} /></button>
          </div>
      </div>

      {/* Action Bar */}
      <div className='flex justify-between items-center mb-4 w-full '>
        <h2 className='text-lg font-semibold text-gray-700'>Message List</h2>
        <button className='bg-black text-white p-2.5 rounded-lg font-bold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2'>
          <Plus size={20} />
          {/* <span className='hidden sm:inline'>New</span> */}
        </button>
      </div>

      {/* Main Grid */}
      <div className='grid lg:grid-cols-2 gap-6'>
        {/* Left Panel - Message List */}
        <div className='flex flex-col h-[550px]'>
          {/* Search Bar */}

          

          {/* Messages Container */}
          <div className="flex-1 bg-white rounded-lg shadow-md overflow-y-auto p-4">
            {filteredMessages && filteredMessages.length > 0 ? (
              filteredMessages.map((item: MessageItem) => {
                const initials = getInitials(item.sender);
                const isSelected = selectedMessage?.id === item.id;

                return (
                  <div
                    key={item.id}
                    className={`flex items-start gap-3 my-2 cursor-pointer transition-all duration-200 p-3 rounded-xl relative ${isSelected
                        ? 'bg-gray-300/40 '
                        : 'hover:bg-gray-50 border-2 border-transparent'
                      }`}
                    onClick={() => setSelectedMessage(item)}
                  >
                    {/* Avatar */}
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-black text-white font-bold text-sm shadow-md">
                      {initials}
                    </div>

                    {/* Message Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h1 className="text-gray-800 text-sm font-semibold truncate pr-2">
                          {item.sender}
                        </h1>
                        {/* <p className="text-gray-400 text-xs flex-shrink-0">{item.date}</p> */}
                      </div>
                      <p className="text-gray-500 text-xs mb-1">{item.type}</p>
                      <p className="text-gray-600 text-sm line-clamp-2">{item.message}</p>
                      <p className="text-gray-400 text-xs flex-shrink-0">{item.date}</p>

                    </div>

                    {/* Notification Badge */}
                    {item.notification && (
                      <span className="absolute top-3 right-3 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                        {item.notification}
                      </span>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-center text-gray-400 text-sm">
                  {searchQuery ? 'No messages found' : 'No messages available'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Chat View */}
        <div className='flex flex-col h-[550px] rounded-xl bg-white shadow-md'>
          {selectedMessage ? (
            <>
              {/* Chat Header */}
              <div className='bg-white text-black p-4 rounded-t-xl flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white font-bold text-sm">
                    {getInitials(selectedMessage.sender)}
                  </div>
                  <div>
                    <h2 className='font-bold'>{selectedMessage.sender}</h2>
                    <p className='text-sm text-gray-500'>{selectedMessage.type}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className='hover:bg-white/10 p-2 rounded-full transition-colors'
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chat Messages */}
              <div className='flex-1 overflow-y-auto p-4 bg-gray-50'>
                {selectedMessage.chat ? (
                  selectedMessage.chat[0].messages.map((msg: ChatMessage) => (
                    <div
                      key={msg.id}
                      className={`mb-3 flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] p-3 rounded-2xl shadow-sm ${msg.sender === 'me'
                            ? 'bg-blue-500 text-white rounded-br-none'
                            : 'bg-white text-gray-800 rounded-bl-none'
                          }`}
                      >
                        <p className='text-sm'>{msg.message}</p>

                      </div>
                    </div>
                  ))
                ) : (
                  <div className='flex items-center justify-center h-full'>
                    <div className='text-center'>
                      <p className='text-gray-500 text-sm'>{selectedMessage.message}</p>
                      <p className='text-gray-400 text-xs mt-2'>{selectedMessage.date}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Message Input */}
              <div className='bg-white border-t border-gray-200 p-4 rounded-b-xl'>
                <div className='flex items-center gap-2'>
                  <input
                    type="text"
                    className='flex-1 bg-gray-100 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all'
                    placeholder='Type a message...'
                    value={newMessage}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button
                    onClick={handleSendMessage}
                    className='bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105'
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className='flex items-center justify-center h-full'>
              <div className='text-center'>
                <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Search size={40} className='text-gray-300' />
                </div>
                <p className='text-3xl font-bold text-gray-200 mb-2'>Start a Conversation</p>
                <p className='text-gray-400 text-sm'>Select a message to view the conversation</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;