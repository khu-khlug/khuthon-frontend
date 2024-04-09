export type ListManagerInvitationResponseInvitation = {
  id: string;
  email: string;
  expiredAt: Date;
};

export type ListManagerInvitationResponseDto = {
  invitations: ListManagerInvitationResponseInvitation[];
};
