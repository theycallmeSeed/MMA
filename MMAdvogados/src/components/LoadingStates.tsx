import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, FileText, Users, Scale } from 'lucide-react';
import { glassmorphism } from '@/lib/design-system';

// Skeleton loader for text content
export const TextSkeleton: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className = "" 
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            delay: i * 0.1 
          }}
          className={`h-4 bg-gray-200 dark:bg-gray-700 rounded ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

// Card skeleton loader
export const CardSkeleton: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`${glassmorphism.light} p-6 rounded-xl ${className}`}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"
      />
      <TextSkeleton lines={2} />
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded mt-4"
      />
    </motion.div>
  );
};

// Spinner loader
export const Spinner: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({ 
  size = 'md', 
  className = "" 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`${sizeClasses[size]} border-2 border-gray-200 border-t-blue-600 rounded-full ${className}`}
    />
  );
};

// Pulse loader
export const PulseLoader: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1
          }}
          className="w-3 h-3 bg-blue-600 rounded-full"
        />
      ))}
    </div>
  );
};

// Loading overlay
export const LoadingOverlay: React.FC<{ 
  isLoading: boolean; 
  message?: string;
  children: React.ReactNode;
}> = ({ isLoading, message = "Carregando...", children }) => {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg"
        >
          <div className="flex flex-col items-center space-y-4">
            <Spinner size="lg" />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 font-medium"
            >
              {message}
            </motion.p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Service-specific loading states
export const ServiceLoadingCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${glassmorphism.light} p-6 rounded-xl`}
    >
      <div className="flex items-center space-x-4 mb-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg"
        >
          <Scale className="w-6 h-6 text-blue-600" />
        </motion.div>
        <div className="flex-1">
          <TextSkeleton lines={1} className="mb-2" />
          <TextSkeleton lines={1} />
        </div>
      </div>
      <TextSkeleton lines={3} />
    </motion.div>
  );
};

export const TeamLoadingCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`${glassmorphism.light} p-6 rounded-xl text-center`}
    >
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"
      />
      <TextSkeleton lines={2} />
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        className="w-20 h-6 bg-gray-200 dark:bg-gray-700 rounded mx-auto mt-2"
      />
    </motion.div>
  );
};

// Button loading state
export const LoadingButton: React.FC<{
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ isLoading, children, className = "", onClick, disabled }) => {
  return (
    <motion.button
      whileHover={!isLoading && !disabled ? { scale: 1.02 } : {}}
      whileTap={!isLoading && !disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`relative overflow-hidden ${className} ${
        isLoading || disabled ? 'cursor-not-allowed opacity-70' : ''
      }`}
    >
      <motion.div
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
      
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Spinner size="sm" />
        </motion.div>
      )}
    </motion.button>
  );
};

export default {
  TextSkeleton,
  CardSkeleton,
  Spinner,
  PulseLoader,
  LoadingOverlay,
  ServiceLoadingCard,
  TeamLoadingCard,
  LoadingButton
};