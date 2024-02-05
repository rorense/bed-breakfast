import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

// FUnction to find different reservations
export default async function getReservations(params: IParams) {
  try {
    const { listingId, userId, authorId } = params;

    const query: any = {};

    //   Querying by listingID
    if (listingId) {
      query.listingId = listingId;
    }

    //   Querying by userId
    if (userId) {
      query.userId = userId;
    }

    //   Querying by authorId
    if (authorId) {
      query.listing = { userId: authorId };
    }

    //   Querying in the database withing pre-existing reservations
    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    //   Since we will be returning the data to the client, we need to make sure that the data is safe
    const safeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
