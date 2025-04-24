import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { nom, email, telephone, message } = await request.json();

    // Validation
    if (!nom || (!email && !telephone)) {
      return new Response(
        JSON.stringify({
          error: "Nom et au moins un moyen de contact sont requis",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Natka Contact <onboarding@resend.dev>",
      to: "nathalieboupha@gmail.com", // Adresse autorisée en mode test
      subject: `Nouveau message de ${nom}`,
      text: `
        Nom: ${nom}
        Email: ${email || "(Non renseigné)"}
        Téléphone: ${telephone || "(Non renseigné)"}
        Message: ${message || "(Aucun message)"}
      `,
      reply_to: email || undefined,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return new Response(
        JSON.stringify({ error: "Erreur lors de l'envoi du message" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur:", error);
    return new Response(
      JSON.stringify({ error: "Erreur interne du serveur" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
