 "use client";
 
 import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
 import AuditModal from "@/components/AuditModal";
 
 type AuditModalContextValue = {
   isOpen: boolean;
   openAuditModal: () => void;
   closeAuditModal: () => void;
 };
 
 const AuditModalContext = createContext<AuditModalContextValue | null>(null);
 
 export function AuditModalProvider({ children }: { children: React.ReactNode }) {
   const [isOpen, setIsOpen] = useState(false);
 
   const openAuditModal = useCallback(() => setIsOpen(true), []);
   const closeAuditModal = useCallback(() => setIsOpen(false), []);
 
   const value = useMemo(
     () => ({ isOpen, openAuditModal, closeAuditModal }),
     [isOpen, openAuditModal, closeAuditModal]
   );
 
   return (
     <AuditModalContext.Provider value={value}>
       {children}
       <AuditModal />
     </AuditModalContext.Provider>
   );
 }
 
 export const useAuditModal = () => {
   const ctx = useContext(AuditModalContext);
   if (!ctx) throw new Error("useAuditModal must be used within AuditModalProvider");
   return ctx;
 };
